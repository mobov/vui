import { Vue, Component, Prop } from 'vue-property-decorator'
import { size } from '../constant'
import { genSize, getStyleSize } from '../util'

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
export default class SpaceMixin extends Vue {
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
}
