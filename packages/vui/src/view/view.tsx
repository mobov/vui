import { Component, Prop, Vue } from 'vue-property-decorator'
import { genSize } from '../core/util'
import { Fill, size } from '../core/constant'

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

  @Prop({ type: String })
  footerIndex?: number

  @Prop({ type: String })
  leftIndex?: number

  @Prop({ type: String })
  rightIndex?: number

  get classes () {
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

  get styles () {
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

  isHeader = false
  isFooter = false
  isLeft = false
  isRight = false

  RHeader () {
    return (
      <transition name="m-transition-slide-down">
        {this.isHeader ? <div staticClass={`${compName}-header`}>{this.$slots.header}</div> : undefined}
      </transition>
    )
  }

  RFooter () {
    return (
      <transition name="m-transition-slide-up">
        {this.isFooter ? <div staticClass={`${compName}-footer`}>{this.$slots.footer}</div> : undefined}
      </transition>
    )
  }

  RLeft () {
    return (
      <transition name="m-transition-slide-left">
        {this.isLeft ? <div staticClass={`${compName}-left`}>{this.$slots.left}</div> : undefined}
      </transition>
    )
  }

  RRight () {
    return (
      <transition name="m-transition-slide-right">
        {this.isRight ? <div staticClass={`${compName}-right`}>{this.$slots.right}</div> : undefined}
      </transition>
    )
  }

  render () {
    const { $slots, styles, classes, RHeader, RFooter, RLeft, RRight } = this

    this.isHeader = $slots.header !== undefined
    this.isFooter = $slots.footer !== undefined
    this.isLeft = $slots.left !== undefined
    this.isRight = $slots.right !== undefined

    console.log(styles)
    return (
      <div staticClass={compName}
           style={styles}
           class={classes}>
        <section staticClass={`${compName}-main`}>
          {$slots.default}
        </section>
        {RHeader()}
        {RFooter()}
        {RLeft()}
        {RRight()}
      </div>
    )
  }
}
