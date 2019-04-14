import { Component, Prop, Vue, Mixins } from 'vue-property-decorator'
import { genSize } from '../core/util'
import { Fill, size } from '../core/constant'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import elevated from '../core/mixin/elevated'
import variable from '../core/mixin/variable'
import shapeable from '../core/mixin/shapeable'

const compName = 'm-view'

@Component
export default class MView extends Vue {
  @Prop({ type: String, default: Fill.both })
  fillHeader?: Fill

  @Prop({ type: String, default: Fill.both })
  fillFooter?: Fill

  @Prop({ type: [String, Number] })
  headerSize?: size

  @Prop({ type: [String, Number] })
  footerSize?: size

  @Prop({ type: [String, Number] })
  leftSize?: size

  @Prop({ type: [String, Number] })
  rightSize?: size

  @Prop({ type: Number })
  headerIndex?: number

  @Prop({ type: Number })
  footerIndex?: number

  @Prop({ type: Number })
  leftIndex?: number

  @Prop({ type: Number })
  rightIndex?: number

  private get classes () {
    const { fillHeader, fillFooter, isHeader, isFooter, isLeft, isRight } = this

    return {
      'm--with-header': isHeader,
      'm--with-footer': isFooter,
      'm--with-left': isLeft,
      'm--with-right': isRight,
      [`m--fill-header-${fillHeader}`]: true,
      [`m--fill-footer-${fillFooter}`]: true
    }
  }

  private get styles () {
    const { isHeader, isFooter, isLeft, isRight, headerSize, footerSize, leftSize, rightSize
    } = this

    const styles = { }

    if (isHeader) {
      genSize(styles, `${compName}-header`, headerSize)
    }
    if (isFooter) {
      genSize(styles, `${compName}-footer`, footerSize)
    }
    if (isLeft) {
      genSize(styles, `${compName}-left`, leftSize)
    }
    if (isRight) {
      genSize(styles, `${compName}-right`, rightSize)
    }

    return styles
  }

  private isHeader = false
  private isFooter = false
  private isLeft = false
  private isRight = false

  private RHeader () {
    return (
      <transition name="m-transition-slide-down">
        {this.isHeader ? <div staticClass={`${compName}-header`}>{this.$slots.header}</div> : undefined}
      </transition>
    )
  }

  private RFooter () {
    return (
      <transition name="m-transition-slide-up">
        {this.isFooter ? <div staticClass={`${compName}-footer`}>{this.$slots.footer}</div> : undefined}
      </transition>
    )
  }

  private RLeft () {
    return (
      <transition name="m-transition-slide-left">
        {this.isLeft ? <div staticClass={`${compName}-left`}>{this.$slots.left}</div> : undefined}
      </transition>
    )
  }

  private RRight () {
    return (
      <transition name="m-transition-slide-right">
        {this.isRight ? <div staticClass={`${compName}-right`}>{this.$slots.right}</div> : undefined}
      </transition>
    )
  }

  private render () {
    const { $slots, styles, classes, RHeader, RFooter, RLeft, RRight } = this

    this.isHeader = $slots.header !== undefined
    this.isFooter = $slots.footer !== undefined
    this.isLeft = $slots.left !== undefined
    this.isRight = $slots.right !== undefined
console.log(this)
    return (
      <div staticClass={compName}
           style={styles}
           class={classes}>
        {RHeader()}
        {RLeft()}
        {RRight()}
        {RFooter()}
        <section staticClass={`${compName}-main`}>
          {$slots.default}
        </section>
      </div>
    )
  }
}
