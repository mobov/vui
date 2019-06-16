import { Vue, Component, Prop } from 'vue-property-decorator'
import VuiComponent from '../vuiComponent'
import { size } from '../constant'
import { getStyleSize, genSize } from '../util'

type SizeStyles = {
  size?: size | string | number
  height?: string | number
  width?: string | number
}

@Component
export default class SizeMixin extends VuiComponent {
  @Prop({ type: [String, Number] })
  size?: size | string | number

  @Prop({ type: [String, Number] })
  height?: string | number

  @Prop({ type: [String, Number] })
  width?: string | number

  get sizeStyle () {
    const { height, width, size } = this
    const styles: SizeStyles = {}

    genSize(styles, this.name, size)

    if (height !== undefined) {
      styles.height = getStyleSize(height)
    }
    if (width !== undefined) {
      styles.width = getStyleSize(width)
    }

    return styles
  }
}
