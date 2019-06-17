import { Vue, Component, Prop } from 'vue-property-decorator'
import { color, elevation, ELEVATION, size } from '../constant'
import { genColor, genElevation, genFontColor, genSize, getStyleSize } from '../util'

type SizeStyles = {
  size?: size | string | number
  height?: string | number
  width?: string | number
}

type SpaceSize = size | string | number | undefined

type SpaceStyles = {
  margin?: string,
  marginX?: string,
  marginY?: string,
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  padding?: string,
  paddingX?: string,
  paddingY?: string,
  paddingTop?: string,
  paddingBottom?: string,
  paddingLeft?: string,
  paddingRight?: string,
}

@Component
export default class BaseMixin extends Vue {
  name!: string

  @Prop({ type: [String, Number] })
  size?: size | string | number

  @Prop({ type: [String, Number] })
  height?: string | number

  @Prop({ type: [String, Number] })
  width?: string | number

  @Prop({ type: String })
  fontColor: color | undefined

  @Prop({ type: String })
  color: color | undefined

  @Prop({
    type: Number,
    validator (value): boolean {
      return ELEVATION.includes(value)
    }
  })
  elevation!: elevation | undefined

  @Prop({ type: [String, Number] })
  marginLeft: SpaceSize

  @Prop({ type: [String, Number] })
  marginRight: SpaceSize

  @Prop({ type: [String, Number] })
  marginTop: SpaceSize

  @Prop({ type: [String, Number] })
  marginBottom: SpaceSize

  @Prop({ type: [String, Number] })
  marginX: SpaceSize

  @Prop({ type: [String, Number] })
  marginY: SpaceSize

  @Prop({ type: [String, Number] })
  margin: SpaceSize

  @Prop({ type: [String, Number] })
  paddingLeft: SpaceSize

  @Prop({ type: [String, Number] })
  paddingRight: SpaceSize

  @Prop({ type: [String, Number] })
  paddingTop: SpaceSize

  @Prop({ type: [String, Number] })
  paddingBottom: SpaceSize

  @Prop({ type: [String, Number] })
  paddingX: SpaceSize

  @Prop({ type: [String, Number] })
  paddingY: SpaceSize

  @Prop({ type: [String, Number] })
  padding: SpaceSize

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

  get colorStyle () {
    const styles = {}

    genFontColor(styles, this.name, this.fontColor)
    genColor(styles, this.name, this.color)

    return styles
  }

  get elevationStyle () {
    const styles = {}
    genElevation(styles, this.name, this.elevation)

    return styles
  }

  get spaceStyle () {
    const { margin, marginX, marginY, marginTop, marginBottom, marginLeft, marginRight,
      padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight } = this
    const styles: SpaceStyles = {}

    if (margin !== undefined) {
      styles.margin = getStyleSize(margin)
    }
    if (marginX !== undefined) {
      styles.marginLeft = getStyleSize(marginX)
      styles.marginRight = getStyleSize(marginX)
    }
    if (marginY !== undefined) {
      styles.marginTop = getStyleSize(marginY)
      styles.marginBottom = getStyleSize(marginY)
    }
    if (marginTop !== undefined) {
      styles.marginTop = getStyleSize(marginTop)
    }
    if (marginBottom !== undefined) {
      styles.marginBottom = getStyleSize(marginBottom)
    }
    if (marginLeft !== undefined) {
      styles.marginLeft = getStyleSize(marginLeft)
    }
    if (marginRight !== undefined) {
      styles.marginRight = getStyleSize(marginRight)
    }
    if (padding !== undefined) {
      styles.padding = getStyleSize(padding)
    }
    if (paddingX !== undefined) {
      styles.paddingLeft = getStyleSize(paddingX)
      styles.paddingRight = getStyleSize(paddingX)
    }
    if (paddingY !== undefined) {
      styles.paddingTop = getStyleSize(paddingY)
      styles.paddingBottom = getStyleSize(paddingY)
    }
    if (paddingTop !== undefined) {
      styles.paddingTop = getStyleSize(paddingTop)
    }
    if (paddingBottom !== undefined) {
      styles.paddingBottom = getStyleSize(paddingBottom)
    }
    if (paddingLeft !== undefined) {
      styles.paddingLeft = getStyleSize(paddingLeft)
    }
    if (paddingRight !== undefined) {
      styles.paddingRight = getStyleSize(paddingRight)
    }

    return styles
  }

  get baseStyle () {
    return {
      ...this.elevationStyle,
      ...this.colorStyle,
      ...this.spaceStyle,
      ...this.sizeStyle
    }
  }
}
