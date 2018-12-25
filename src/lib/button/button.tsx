import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
// import MSpin from '@/components/spin'
import MIcon from '@/lib/icon'
import { Size, Color, Variety, Shape } from '@/types/model'
import { VARIETY, SHAPE } from '@/lib/core/constant'
import { genColor, genElevation, genSize, genHover } from '@/lib/core/style-gen'

const _name = 'm-button'

@Component({ components: { MIcon } })
export default class MButton extends Vue {
  @Prop({ type: String })
  private size!: Size

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

  get styles () {
    const { color, fontColor, size, elevation } = this
    const styles = { }

    genColor(styles, _name, 'color', color)
    genColor(styles, _name, 'font-color', fontColor)
    genSize(styles, _name, 'size', size)
    genElevation(styles, _name, elevation)
    genHover(styles, _name, 'hover-color', color)

    return styles
  }

  get classes () {
    const { variety, shape, block } = this

    return {
      [`m--variety-${variety}`]: true,
      [`m--shape-${shape}`]: true,
      'm--block': block
    }
  }

  private render () {
    const { classes, styles, icon, handleClick } = this

    return (
      <button v-m-ripple
              staticClass={_name}
              style={styles}
              class={classes}
              onClick={handleClick}>
        {icon
          ? <MIcon name={icon} />
          : null}
        {this.$slots.default
          ? <div class={`${_name}__main`}>{this.$slots.default}</div>
          : null}
      </button>
    )
  }
}
