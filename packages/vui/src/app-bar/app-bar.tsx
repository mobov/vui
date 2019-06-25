import { Component, Mixins, Prop } from 'vue-property-decorator'
import { scrollToX } from '@mobov/es-helper'
import mixBase from '../core/mixin/base'
import mixVariety from '../core/mixin/variety'
import mixShape from '../core/mixin/shape'

@Component
export default class MAppBar extends Mixins (
  mixBase,
  mixVariety,
  mixShape
) {
  name = 'm-app-bar'

  @Prop({ type: Boolean, default: false })
  enableMouseScroll!: boolean

  @Prop({ type: Boolean, default: true })
  scrollKeep!: boolean

  get styles () {
    return {
      ...this.baseStyle,
    }
  }

  get classes () {
    return {
      ...this.baseClass,
      ...this.varietyClass,
      ...this.shapeClass
    }
  }

  private lastScrollVal = 0

  scrollTo () {

  }
  // 滚轮映射
  handleWheel (e) {
    if (!e.shiftKey) {
      e.preventDefault()
      scrollToX(this.$refs.scroller as HTMLElement, {
        target: e.deltaY * 2,
        duration: 200
      })
    }
  }

  handleScroll () {
    const $scroller: any = this.$refs.scroller
    this.lastScrollVal = $scroller.scrollTop
  }

  activated() {
    // 恢复滚动位置
    if (this.scrollKeep && (this.lastScrollVal !== (this.$refs.scroller as any).scrollLeft)) {
      (this.$refs.scroller as any).scrollLeft = this.lastScrollVal
    }
  }
  deactivated() {
    // 记录滚动位置
    if (this.scrollKeep && (this.lastScrollVal !== (this.$refs.scroller as any).scrollLeft)) {
      this.lastScrollVal = (this.$refs.scroller as any).scrollLeft
    }
  }
  mounted () {
    if (this.enableMouseScroll) {
      (this.$refs.scroller as any).addEventListener('mousewheel', this.handleWheel)
    }
  }
  beforeDestroy() {
    // 移除scroll绑定
    if (this.enableMouseScroll) {
      (this.$refs.scroller as any).removeEventListener('mousewheel', this.handleWheel)
    }
  }

  render () {
    const { name, $slots, classes, styles, handleScroll } = this

    return (
      <div staticClass={name}
           style={styles}
           class={classes}>
        {$slots.left}
        <section ref="scroller"
                 staticClass={`${name}-main`}
                 onscroll={handleScroll}>
          {$slots.default}
        </section>
        {$slots.right}
      </div>
    )
  }
}
