import PopperJS from 'popper.js'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { placement, PLACEMENT } from '../constants'
import ZIndex from '../z-index'
import { debounce } from 'throttle-debounce'
import { off, on } from '../event'

declare module 'vue/types/vue' {
  interface Vue {
    visible?: boolean
    initPopper?: any
    updatePopper?: any
    popperVM?: any
    popperStyle?: any
  }
}

const $popperHome: HTMLElement = document.body

@Component
export default class PopperMixin extends Vue {
  @Prop({ type: String, default: 'bottom' })
  placement?: placement

  @Prop({ type: Number, default: 0 })
  offset?: number

  @Prop({ type: Boolean, default: false })
  value?: boolean

  @Prop({ type: Boolean })
  visibleArrow?: boolean

  @Prop({ type: Boolean, default: true })
  transition?: boolean

  @Prop({ type: Boolean })
  disabled!: boolean

  @Prop({ type: String, default: 'hover' })
  trigger!: 'hover' | 'click'

  @Prop({ type: Number, default: 0 })
  showDelay!: number

  @Prop({ type: Number, default: 0 })
  hideDelay!: number

  @Prop({ type: Object, default: () => {} })
  options?: any

  popperId: string

  popperJS: any

  popperVM: any

  $popper: any

  $reference: any

  @Watch('visible')
  whenVisibleUpdate (val: boolean) {
    if (val) {
      this.$emit('show', this)
      if (this.popperJS) {
        this.popperJS.enableEventListeners()
      }
      this.updatePopper();
    } else {
      if (this.popperJS) {
        this.popperJS.disableEventListeners()
      }
      this.$emit('hide', this)
    }
  }

  visible: boolean = false

  isMouseOver: boolean = false

  zIndex: number = ZIndex.next

  get popperStyle () {
    return {
      zIndex: this.zIndex
    }
  }

  get popperOptions () {
    return {
      ...this.options,
      placement: this.placement,
      modifiers: {
        preventOverflow: {
          escapeWithReference: true
        }
      }
    }
  }

  // @ts-ignore
  initPopper () {
    if (this.popperJS) {
      this.popperJS.scheduleUpdate()
    } else {
      this.createPopper()
    }
  }

  createPopper () {
    if (!PLACEMENT.includes(this.placement)) {
      return
    }
    $popperHome.appendChild(this.popperVM.$el)
    this.$nextTick(() => {
      this.$popper = this.popperVM.$el
      this.$reference = this.$reference || this.$el

      if (!this.$popper || !this.$reference) {
        return
      }
      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy()
      }
      this.popperOptions.onCreate = () => {
        this.$emit('created', this)
        this.$nextTick(this.updatePopper)
      }
      this.popperJS = new PopperJS(
        this.$reference,
        this.$popper,
        this.popperOptions
      )
    })
  }
  // @ts-ignore
  updatePopper () {
    this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper()
  }

  destroyPopper () {
    if (this.popperJS) {
      this.popperJS.destroy()
      this.popperJS = null
      $popperHome.removeChild(this.$popper)
    }
  }

  debounceHide: any = debounce(50, () => this.handleHide())

  show () {
    this.zIndex = ZIndex.next
    if (this.trigger === 'hover') {
      this.isMouseOver = true
    }
    this.visible = true
  }

  hide () {
    if (this.trigger === 'hover') {
      this.isMouseOver = false
      this.debounceHide()
    } else {
      this.visible = false
    }
  }

  toggle () {
    if (this.visible) {
      this.hide()
    } else {
      this.show()
    }
  }

  handleDocumentClick (e: Event) {
    if (!(
        this.$popper.contains(e.target) ||
        this.$reference.contains(e.target)
      )) {
      this.hide()
    }
  }

  handleHide () {
    setTimeout(() => {
      if (!this.isMouseOver) {
        this.visible = false
      }
    }, this.hideDelay)
  }

  mounted () {
    this.initPopper()
    this.$nextTick(() => {
      if (this.trigger === 'hover') {
        on(this.$el as HTMLElement, 'mouseenter', this.show)
        on(this.$el as HTMLElement, 'mouseleave', this.hide)
        on(this.popperVM.$el as HTMLElement, 'mouseenter', this.show)
        on(this.popperVM.$el as HTMLElement, 'mouseleave', this.hide)
      } else if (
        this.trigger === 'click'
      ) {
        on(this.$el as HTMLElement, 'click', this.show)
        on(document.body, 'click', this.handleDocumentClick)
      } else if (
        this.trigger === 'toggle'
      ) {
        on(this.$el as HTMLElement, 'click', this.toggle)
        on(document.body, 'click', this.handleDocumentClick)
      }
    })
  }

  beforeDestroy () {
    if (this.trigger === 'hover') {
      off(this.$el as HTMLElement, 'mouseenter', this.show)
      off(this.$el as HTMLElement, 'mouseleave', this.hide)
      off(this.popperVM.$el as HTMLElement, 'mouseenter', this.show)
      off(this.popperVM.$el as HTMLElement, 'mouseleave', this.hide)
    } else if (
      this.trigger === 'click'
    ) {
      off(this.$el as HTMLElement, 'click', this.show)
      off(document.body, 'click', this.handleDocumentClick)
    } else if (
      this.trigger === 'toggle'
    ) {
      off(this.$el as HTMLElement, 'click', this.toggle)
      off(document.body, 'click', this.handleDocumentClick)
    }

    this.destroyPopper()
  }

  deactivated() {
    // @ts-ignore
    this.$options.beforeDestroy[0].call(this)
  }
}
