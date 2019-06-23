import { Component, Prop, Vue, Mixins, Emit } from 'vue-property-decorator'
import { scrollToY } from '@mobov/es-helper'
import mixColor from '../core/mixin/color'
import mixSpaceMargin from '../core/mixin/space-margin'
import mixSpacePadding from '../core/mixin/space-padding'
import mixSize from '../core/mixin/size'
import mixElevation from '../core/mixin/elevation'


@Component
export default class MView extends Mixins (
  mixColor,
  mixSpaceMargin,
  mixSpacePadding,
  mixSize,
  mixElevation
) {
  name = 'm-view'

  @Prop({ type: Boolean, default: false })
  scrollKeep!: boolean

  @Prop({ type: Function })
  onRefresh?: () => {}

  @Prop({ type: Function })
  onLoadMore?: () => {}

  @Emit('scroll')
  onScroll (params: [Event, number, boolean, boolean, '↕' | '↓' | '↑']) {}


  get classes () {
    const {} = this

    return {
      ...this.elevationClass
    }
  }

  get styles () {
    const { } = this

    return {
      ...this.sizeStyle,
      ...this.spaceMarginStyle
    }
  }

  get scrollerStyles () {
    const { } = this
    return {
      ...this.spacePaddingStyle
    }
  }

  private enableWatchScroll = false
  private enableLoadMore = false
  private enableRefresh = false
  private pending = false
  private isStart = true
  private isEnd = false
  private lastScrollVal = 0
  private scrollKeepVal = 0

  handleScroll (e: Event) {
    const $scroller: any = this.$refs.scroller

    if (this.enableWatchScroll) {
      const direction = $scroller.scrollTop === this.lastScrollVal
        ? '↕' : $scroller.scrollTop > this.lastScrollVal
          ? '↓' : '↑'
      this.isStart = ($scroller.scrollTop === 0)
      this.isEnd = ($scroller.scrollTop + $scroller.offsetHeight + 5
        > $scroller.scrollHeight) // 加1的浮点计算误差
      this.onScroll([e, $scroller.scrollTop, this.isStart, this.isEnd, direction])
      this.lastScrollVal = $scroller.scrollTop
    }
    // 滚动加载
  }

  refresh () {

  }

  loadMore () {

  }

  scrollTo (target: any) {
    console.log(target)
    scrollToY(this.$refs.scroller as any, {
      target
    } as any)
  }

  mounted() {
    if (this.$listeners.loadMore || this.$listeners.scroll) {
      this.enableWatchScroll = true
    }
    if (this.$listeners.loadMore) {
      this.enableLoadMore = true
    }
    // 添加scroll绑定
    if (this.enableWatchScroll) {
      (this.$refs.scroller as any).addEventListener('scroll', this.handleScroll)
    }
  }
  activated() {
    // 恢复滚动位置
    if (this.scrollKeep && (this.scrollKeepVal !== (this.$refs.scroller as any).scrollTop)) {
      (this.$refs.scroller as any).scrollTop = this.scrollKeepVal
    }
  }
  deactivated() {
    // 记录滚动位置
    if (this.scrollKeep && (this.scrollKeepVal !== (this.$refs.scroller as any).scrollTop)) {
      this.scrollKeepVal = (this.$refs.scroller as any).scrollTop
    }
  }
  beforeDestroy() {
    // 移除scroll绑定
    if (this.enableWatchScroll) {
      (this.$refs.scroller as any).removeEventListener('scroll', this.handleScroll)
    }
  }
  render () {
    const { name, $slots, styles, classes, scrollerStyles } = this

    return (
      <section staticClass={name}
               style={styles}>
        <section staticClass={`${name}-scroller`}
                 ref="scroller"
                 class={classes}
                 style={scrollerStyles}>
          {$slots.default}
        </section>
      </section>
    )
  }
}
