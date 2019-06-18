import { Vue, Component, Prop } from 'vue-property-decorator'
import { color } from '../constant'
import { genColor, genFontColor } from '../util'

@Component
export default class ColorMixin extends Vue {
  name!: string

  @Prop({ type: String })
  fontColor: color | undefined

  @Prop({ type: String })
  color: color | undefined

  get colorStyle () {
    const styles = {}

    genFontColor(styles, this.name, this.fontColor)
    genColor(styles, this.name, this.color)

    return styles
  }
}
