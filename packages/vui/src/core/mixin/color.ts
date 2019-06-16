import { Vue, Component, Prop } from 'vue-property-decorator'
import VuiComponent from '../vuiComponent'
import { color } from '../constant'
import { genColor, genFontColor } from '../util'

@Component
export default class ColorMixin extends VuiComponent {
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
