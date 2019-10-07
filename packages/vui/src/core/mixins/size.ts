import { Vue, Component, Prop } from 'vue-property-decorator'
import { size } from '../constants'
import { getStyleSize, genSize } from '../utils'

declare module 'vue/types/vue' {
  interface Vue {
    size?: size | string | number
    height?: string | number
    width?: string | number
    maxHeight?: string | number
    maxWidth?: string | number
    minHeight?: string | number
    minWidth?: string | number
    fontSize?: string | number
    sizeStyle: any
  }
}
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    size?: size | string | number
    height?: string | number
    width?: string | number
    maxHeight?: string | number
    maxWidth?: string | number
    minHeight?: string | number
    minWidth?: string | number
    fontSize?: string | number
  }
}

type SizeStyles = {
  size?: size | string | number
  height?: string | number
  width?: string | number
  maxHeight?: string | number
  maxWidth?: string | number
  minHeight?: string | number
  minWidth?: string | number
  fontSize?: string | number
}

@Component
export default class SizeMixin extends Vue {
  name!: string

  @Prop({ type: [String, Number] })
  size?: string | number

  @Prop({ type: [String, Number] })
  height?: string | number

  @Prop({ type: [String, Number] })
  width?: string | number

  @Prop({ type: [String, Number] })
  minHeight?: string | number

  @Prop({ type: [String, Number] })
  minWidth?: string | number

  @Prop({ type: [String, Number] })
  maxHeight?: string | number

  @Prop({ type: [String, Number] })
  maxWidth?: string | number

  @Prop({ type: [String, Number] })
  fontSize?: size | string | number

  get sizeStyle () {
    const { height, width, minWidth, minHeight, maxHeight, maxWidth, size, fontSize } = this
    const styles: SizeStyles = {}

    genSize(styles, this.name, size)

    if (height !== undefined) {
      styles.height = getStyleSize(height)
    }
    if (width !== undefined) {
      styles.width = getStyleSize(width)
    }
    if (minHeight !== undefined) {
      styles.minHeight = getStyleSize(minHeight)
    }
    if (minWidth !== undefined) {
      styles.minWidth = getStyleSize(minWidth)
    }
    if (maxHeight !== undefined) {
      styles.maxHeight = getStyleSize(maxHeight)
    }
    if (maxWidth !== undefined) {
      styles.maxWidth = getStyleSize(maxWidth)
    }
    if (fontSize !== undefined) {
      styles.fontSize = getStyleSize(fontSize)
    }

    return styles
  }
}
