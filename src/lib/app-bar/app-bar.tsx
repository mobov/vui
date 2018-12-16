import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import { genColor, genSize, genElevation } from '@/lib/core/style-gen'
import { Size } from '@/typings/model'

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

  private get styles () {
    const { color, fontColor, size, elevation } = this
    const styles = {}

    genColor(styles, _name, 'color', color)
    genColor(styles, _name, 'font-color', fontColor)
    genSize(styles, _name, 'size', size)
    genElevation(styles, _name, elevation)

    return styles
  }

  private render () {
    const { styles } = this

    return (
      <div staticClass={_name}
        style={styles}>
        {this.$slots.default}
      </div>
    )
  }
}
