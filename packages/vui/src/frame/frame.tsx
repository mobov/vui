import { Component, Prop, Vue, Mixins } from 'vue-property-decorator'
import { genSize } from '../core/util'
import { Fill, size } from '../core/constant'
import MTransition from '../transition'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import elevated from '../core/mixin/elevated'
import variable from '../core/mixin/variable'
import shapeable from '../core/mixin/shapeable'

const compName = 'm-frame'

@Component({
  components: { MTransition }
})
export default class MFrame extends Vue {
  @Prop({ type: Boolean, default: false })
  transition?: boolean

  @Prop({ type: String, default: Fill.both })
  fillHeader?: Fill

  @Prop({ type: String, default: Fill.both })
  fillFooter?: Fill

  @Prop({ type: [String, Number], default: 0 })
  headerSize?: size

  @Prop({ type: Number })
  headerIndex?: number

  @Prop({ type: Boolean, default: false })
  headerFloat?: boolean

  @Prop({ type: [String, Number], default: 0 })
  footerSize?: size

  @Prop({ type: Number })
  footerIndex?: number

  @Prop({ type: Boolean, default: false })
  footerFloat?: boolean

  @Prop({ type: [String, Number], default: 0 })
  leftSize?: size

  @Prop({ type: Number })
  leftIndex?: number

  @Prop({ type: Boolean, default: false })
  leftFloat?: boolean

  @Prop({ type: [String, Number], default: 0 })
  rightSize?: size

  @Prop({ type: Number })
  rightIndex?: number

  @Prop({ type: Boolean, default: false })
  rightFloat?: boolean

  private get classes () {
    const { fillHeader, fillFooter, isHeader, isFooter, isLeft, isRight,
      headerFloat, footerFloat, leftFloat, rightFloat, transition } = this

    return {
      'm--with-header': isHeader,
      'm--with-footer': isFooter,
      'm--with-left': isLeft,
      'm--with-right': isRight,
      'm--float-header': headerFloat,
      'm--float-footer': footerFloat,
      'm--float-left': leftFloat,
      'm--float-right': rightFloat,
      'm--transition': transition,
      [`m--fill-header-${fillHeader}`]: true,
      [`m--fill-footer-${fillFooter}`]: true
    }
  }

  private get styles () {
    const {
      isHeader, isFooter, isLeft, isRight, headerSize, footerSize, leftSize, rightSize
    } = this

    const styles = { }

    // if (isHeader) {
    //   genSize(styles, `${compName}-header`, headerSize)
    // }
    // if (isFooter) {
    //   genSize(styles, `${compName}-footer`, footerSize)
    // }
    // if (isLeft) {
    //   genSize(styles, `${compName}-left`, leftSize)
    // }
    // if (isRight) {
    //   genSize(styles, `${compName}-right`, rightSize)
    // }
    genSize(styles, `${compName}-header`, headerSize)
    genSize(styles, `${compName}-footer`, footerSize)
    genSize(styles, `${compName}-left`, leftSize)
    genSize(styles, `${compName}-right`, rightSize)

    return styles
  }

  private isHeader = false
  private isFooter = false
  private isLeft = false
  private isRight = false

  private RHeader () {
    const result = this.isHeader ? <div staticClass={`${compName}-header`}>{this.$slots.header}</div> : undefined

    return this.transition ? (
      <transition name="m-frame-transition-header">
        {result}
      </transition>
     ) : result
  }

  private RFooter () {
    const result = this.isFooter ? <div staticClass={`${compName}-footer`}>{this.$slots.footer}</div> : undefined

    return this.transition ? (
      <transition name="m-frame-transition-footer">
        {result}
      </transition>
    ) : result
  }

  private RLeft () {
    const result = this.isLeft ? <div staticClass={`${compName}-left`}>{this.$slots.left}</div> : undefined

    return this.transition ? (
      <transition name="m-frame-transition-left">
        {result}
      </transition>
    ) : result
  }

  private RRight () {
    const result = this.isRight ? <div staticClass={`${compName}-right`}>{this.$slots.right}</div> : undefined

    return this.transition ? (
      <transition name="m-frame-transition-right">
        {result}
      </transition>
    ) : result
  }

  private render () {
    const { $slots, styles, classes, RHeader, RFooter, RLeft, RRight } = this

    this.isHeader = $slots.header !== undefined
    this.isFooter = $slots.footer !== undefined
    this.isLeft = $slots.left !== undefined
    this.isRight = $slots.right !== undefined

    return (
      <div staticClass={compName}
           class={classes}
           style={styles}>
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
