import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import { VNode } from 'vue'
// import MSpin from '@/components/spin'
import MIcon from '@/lib/icon'
import { Size, Color, Variety, Shape } from '@/lib/types/model'
import { VARIETY, SHAPE } from '@/lib/core/constant'
import { genColor, genElevation, genSize, genHover } from '@/lib/core/style-gen'

const prefix = 'm-button'

@Component({ components: { MIcon } })
export default class MButton extends Vue {
  @Prop({ type: String })
  public size!: Size | number | string

  @Prop({ type: Number })
  private elevation!: number

  @Prop({ type: String })
  private color!: Color

  @Prop({ type: String })
  private fontColor!: Color

  @Prop({ type: String, default: SHAPE.corner })
  private shape!: Shape

  @Prop({ type: String, default: VARIETY.normal })
  private variety!: Variety

  @Prop({ type: Boolean })
  private block!: boolean

  @Prop({ type: String })
  private icon!: string

  @Prop({ type: Boolean })
  private loading!: boolean

  @Emit('click')
  private handleClick (e: MouseEvent): void { }

  private get styles (): any {
    const { color, fontColor, size, elevation } = this
    const styles = { }

    genColor(styles, prefix, 'color', color)
    genColor(styles, prefix, 'font-color', fontColor)
    genSize(styles, prefix, 'size', size)
    genElevation(styles, prefix, elevation)
    genHover(styles, prefix, 'hover-color', color)

    return styles
  }

  private get classes (): any {
    const { variety, shape, block } = this

    return {
      [`m--variety-${variety}`]: true,
      [`m--shape-${shape}`]: true,
      'm--block': block
    }
  }

  private render (): VNode {
    const { classes, styles, icon, handleClick } = this

    return (
      <button v-m-ripple
        staticClass={prefix}
        style={styles}
        class={classes}
        onClick={handleClick}>
        {icon ? <MIcon name={icon} /> : undefined}
        {this.$slots.default
          ? <div class={`${prefix}__main`}>{this.$slots.default}</div>
          : <template />}
      </button>
    )
  }
}
