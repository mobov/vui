import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import logger from '../core/logger'
import uid from 'nanoid'
import mixPopper from '../core/mixins/popper'
import mixVariety from '../core/mixins/variety'
import mixShape from '../core/mixins/shape'
import mixColor from '../core/mixins/color'
import mixSize from '../core/mixins/size'
import mixElevation from '../core/mixins/elevation'
import MTransition from '../transition'

@Component({
  mixins: [mixPopper, mixColor, mixSize, mixShape, mixVariety, mixElevation],
  components: { MTransition }
})
export default class MTooltip extends Vue {
  name = 'm-tooltip'

  @Prop({ type: Boolean, default: false })
  value?: boolean

  @Prop({ type: String })
  content!: string

  @Emit('show')
  emitShow (e: MouseEvent): void {}

  @Emit('hide')
  emitHide (e: MouseEvent): void {}

  popperId: string = `m-tooltip-${uid(10)}`

  get styles () {
    return {
      ...this.colorStyle,
      ...this.sizeStyle,
      ...this.spaceStyle,
      ...this.popperStyle
    }
  }

  get classes () {
    return {
      ...this.elevationClass,
      ...this.shapeClass,
      ...this.varietyClass,
    }
  }

  RTooltip () {
    const { name, popperId, classes, styles, $slots, content } = this
    const popoverContent = $slots.content ? $slots.content : content

    return (
      <MTransition name="fade">
        <div v-show={this.visible} role={'tooltip'} aria-hidden="true" id={popperId} staticClass={name} class={classes} style={styles}>
          {popoverContent}
        </div>
      </MTransition>
    )
  }

  beforeCreate () {
    this.popperVM = new Vue({
      data: {
        node: ''
      },
      render (h) {
        return this.node
      }
    }).$mount()
  }

  render () {
    const { name, popperId, content, classes, styles, $slots } = this

    this.popperVM.node = this.RTooltip()

    if ($slots.default.length !== 1) {
      logger.error(`${this.name}组件只允许一个非template子节点或不为空`)
    }

    let result: any = null

    if ($slots.default[0].tag) {
      result = $slots.default[0]
    } else {
      result = <span>{$slots.default[0]}</span>
    }

    return result
  }
}
