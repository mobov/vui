import { Component, Prop, Vue, Mixins } from 'vue-property-decorator'
import { genSize, genStaticStyles } from '../core/util'
import { Fill, size } from '../core/constant'
import MTransition from '../transition'
import mixBase from '../core/mixin/base'

@Component({
  components: { MTransition }
})
export default class MView extends Mixins (
  mixBase
) {
  name = 'm-view'

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
    const {
      fillHeader, fillFooter, isHeader, isFooter, isLeft, isRight,
      headerFloat, footerFloat, leftFloat, rightFloat, transition
    } = this

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
      isHeader, isFooter, isLeft, isRight,
      headerSize, footerSize, leftSize, rightSize,
      headerIndex, footerIndex, leftIndex, rightIndex
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
    genSize(styles, `${this.name}-header`, headerSize)
    genSize(styles, `${this.name}-footer`, footerSize)
    genSize(styles, `${this.name}-left`, leftSize)
    genSize(styles, `${this.name}-right`, rightSize)
    genStaticStyles(styles, this.name, 'header-z-index', headerIndex)
    genStaticStyles(styles, this.name, 'footer-z-index', footerIndex)
    genStaticStyles(styles, this.name, 'left-z-index', leftIndex)
    genStaticStyles(styles, this.name, 'right-z-index', rightIndex)

    return styles
  }

  private isHeader = false
  private isFooter = false
  private isLeft = false
  private isRight = false

  private RHeader () {
    const result = this.isHeader ? <div staticClass={`${this.name}-header`}>{this.$slots.header}</div> : undefined

    return this.transition ? (
      <transition name="m-view-transition-header">
        {result}
      </transition>
     ) : result
  }

  private RFooter () {
    const result = this.isFooter ? <div staticClass={`${this.name}-footer`}>{this.$slots.footer}</div> : undefined

    return this.transition ? (
      <transition name="m-view-transition-footer">
        {result}
      </transition>
    ) : result
  }

  private RLeft () {
    const result = this.isLeft ? <div staticClass={`${this.name}-left`}>{this.$slots.left}</div> : undefined

    return this.transition ? (
      <transition name="m-view-transition-left">
        {result}
      </transition>
    ) : result
  }

  private RRight () {
    const result = this.isRight ? <div staticClass={`${this.name}-right`}>{this.$slots.right}</div> : undefined

    return this.transition ? (
      <transition name="m-view-transition-right">
        {result}
      </transition>
    ) : result
  }

  private render () {
    const { name, $slots, styles, classes, RHeader, RFooter, RLeft, RRight } = this

    this.isHeader = $slots.header !== undefined
    this.isFooter = $slots.footer !== undefined
    this.isLeft = $slots.left !== undefined
    this.isRight = $slots.right !== undefined

    return (
      <div staticClass={name}
           class={classes}
           style={styles}>
        {RHeader()}
        {RLeft()}
        {RRight()}
        {RFooter()}
        <section staticClass={`${name}-main`}>
          {$slots.default}
        </section>
      </div>
    )
  }
}
