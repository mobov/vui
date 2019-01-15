import { Component, Prop, Vue } from 'vue-property-decorator'
import { genColor, genSize, genElevation } from '@/lib/core/style-gen'
import { Size, Variety } from '@/types/model'
import { VARIETY } from '@/lib/core/constant'

const _name = 'm-app-bar'

@Component
export default class MAppBar extends Vue {
  @Prop({ type: String })
  private size!: Size

  @Prop({ type: Number })
  private elevation!: number

  @Prop({ type: [String, Number] })
  private fontColor!: string

  @Prop({ type: [String, Number] })
  private color!: string

  @Prop({ type: String, default: VARIETY.normal })
  private variety!: Variety

  get styles () {
    const { color, fontColor, size, elevation } = this
    const styles = {}

    genColor(styles, _name, 'color', color)
    genColor(styles, _name, 'font-color', fontColor)
    genSize(styles, _name, 'size', size)
    genElevation(styles, _name, elevation)

    return styles
  }

  get classes () {
    const { variety } = this

    return {
      [`m-variety-${variety}`]: true
    }
  }

  render () {
    const { styles, $slots, classes } = this

    return (
      <div staticClass={_name}
           class={classes}
           style={styles}>
        {$slots.default}
      </div>
    )
  }
}
