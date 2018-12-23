import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import { Fill } from '@/types/model'
import { FILL } from '@/lib/core/constant'
const _name = 'm-app'

@Component
export default class MApp extends Vue {
  @Prop({ type: String, default: FILL.both })
  private fillHeader?: Fill

  @Prop({ type: String, default: FILL.both })
  private fillFooter?: Fill

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
      [`m--fill-header-${fillHeader}`]: isHeader,
      [`m--fill-footer-${fillFooter}`]: isFooter
    }
  }

  render () {
    const { classes, $slots } = this

    this.isHeader = $slots.header !== undefined
    this.isFooter = $slots.footer !== undefined
    this.isLeft = $slots.left !== undefined
    this.isRight = $slots.right !== undefined

    return (
      <div staticClass={_name}
           class={classes}>
        <div staticClass={`${_name}-main`}>
          {this.$slots.default}
        </div>
        {this.$slots.header ? <div staticClass={`${_name}-header`}>{this.$slots.header}</div> : undefined}
        {this.$slots.left ? <div staticClass={`${_name}-left`}>{this.$slots.left}</div> : undefined}
        {this.$slots.right ? <div staticClass={`${_name}-right`}>{this.$slots.right}</div> : undefined}
        {this.$slots.footer ? <div staticClass={`${_name}-footer`}>{this.$slots.footer}</div> : undefined}
      </div>
    )
  }
}
