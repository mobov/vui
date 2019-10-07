import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import scrollToY from '@mobov/es-helper/scrollToY'
import mixSize from '../core/mixins/size'
import mixSpace from '../core/mixins/space'
import mixElevation from '../core/mixins/elevation'

@Component({
  mixins: [mixSize, mixSpace, mixElevation]
})
export default class MView extends Vue {
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
    return {
      ...this.elevationClass
    }
  }

  get styles () {
    return {
      ...this.sizeStyle,
      ...this.spaceMarginStyle
    }
  }

  get scrollerStyles () {
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
      // @ts-ignore
      this.$refs.scroller.addEventListener('scroll', this.handleScroll)
    }
  }
  activated() {
    // 恢复滚动位置
    if (this.scrollKeep && (this.scrollKeepVal !== (this.$refs.scroller as any).scrollTop)) {
      // @ts-ignore
      this.$refs.scroller.scrollTop = this.scrollKeepVal
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
      // @ts-ignore
      this.$refs.scroller.removeEventListener('scroll', this.handleScroll)
    }
  }
  render () {
    const { name, $slots, styles, classes, scrollerStyles } = this

    return (
      <section staticClass={name}
               class={classes}
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
