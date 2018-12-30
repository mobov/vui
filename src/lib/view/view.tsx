import { Component, Prop, Vue } from 'vue-property-decorator'
import { Fill, Size } from '@/types/model'
import { FILL, BREAKPOINT } from '@/lib/core/constant'
import { genColor, genElevation, genHover, genSize } from '@/lib/core/style-gen'

const _name = 'm-view'

@Component
export default class MView extends Vue {
  @Prop({ type: String, default: FILL.both })
  private fillHeader?: Fill

  @Prop({ type: String, default: FILL.both })
  private fillFooter?: Fill

  @Prop({ type: String })
  private headerSize?: Size

  @Prop({ type: String })
  private footerSize?: Size

  @Prop({ type: String })
  private leftSize?: Size

  @Prop({ type: String })
  private rightSize?: Size

  @Prop({ type: Number })
  private headerIndex?: number

  @Prop({ type: String })
  private footerIndex?: number

  @Prop({ type: String })
  private leftIndex?: number

  @Prop({ type: String })
  private rightIndex?: number

  private isHeader = false
  private isFooter = false
  private isLeft = false
  private isRight = false

  get classes () {
    const { fillHeader, fillFooter,  isHeader, isFooter, isLeft, isRight } = this

    return {
      'm--with-header': isHeader,
      'm--with-footer': isFooter,
      'm--with-left': isLeft,
      'm--with-right': isRight,
      [`m--fill-header-${fillHeader}`]: true,
      [`m--fill-footer-${fillFooter}`]: true
    }
  }

  get styles () {
    const {
      isHeader, isFooter, isLeft, isRight, headerSize, footerSize,  leftSize, rightSize
    } = this

    const styles = { }

    if (isHeader) {
      genSize(styles, _name, 'header-size', headerSize)
    }
    if (isFooter) {
      genSize(styles, _name, 'footer-size', footerSize)
    }
    if (isLeft) {
      genSize(styles, _name, 'left-size', leftSize)
    }
    if (isRight) {
      genSize(styles, _name, 'right-size', rightSize)
    }

    return styles
  }

  RHeader () {
    return (
      <transition name="m-transition-slide-down">
        {this.isHeader ? <div staticClass={`${_name}-header`}>{this.$slots.header}</div>: undefined}
      </transition>
    )
  }

  RFooter () {
    return (
      <transition name="m-transition-slide-up">
        {this.isFooter ? <div staticClass={`${_name}-footer`}>{this.$slots.footer}</div>: undefined}
      </transition>
    )
  }

  RLeft () {
    return (
      <transition name="m-transition-slide-left">
        {this.isLeft ? <div staticClass={`${_name}-left`}>{this.$slots.left}</div>: undefined}
      </transition>
    )
  }

  RRight () {
    return (
      <transition name="m-transition-slide-right">
        {this.isRight ? <div staticClass={`${_name}-right`}>{this.$slots.right}</div>: undefined}
      </transition>
    )
  }

  render () {
    const { classes, $slots, styles, RHeader, RFooter, RLeft, RRight } = this

    this.isHeader = $slots.header !== undefined
    this.isFooter = $slots.footer !== undefined
    this.isLeft = $slots.left !== undefined
    this.isRight = $slots.right !== undefined

    return (
      <section staticClass={_name}
           class={classes}
           style={styles}>
        <div staticClass={`${_name}-main`}>
          {$slots.default}
        </div>
        {RHeader()}
        {RFooter()}
        {RLeft()}
        {RRight()}
      </section>
    )
  }
}
