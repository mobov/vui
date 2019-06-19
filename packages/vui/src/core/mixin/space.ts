import { Vue, Component, Prop } from 'vue-property-decorator'
import { size } from '../constant'
import { getStyleSpace } from '../util'

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
      styles.margin = getStyleSpace(margin)
    }
    if (marginX !== undefined) {
      styles.marginLeft = getStyleSpace(marginX)
      styles.marginRight = getStyleSpace(marginX)
    }
    if (marginY !== undefined) {
      styles.marginTop = getStyleSpace(marginY)
      styles.marginBottom = getStyleSpace(marginY)
    }
    if (marginTop !== undefined) {
      styles.marginTop = getStyleSpace(marginTop)
    }
    if (marginBottom !== undefined) {
      styles.marginBottom = getStyleSpace(marginBottom)
    }
    if (marginLeft !== undefined) {
      styles.marginLeft = getStyleSpace(marginLeft)
    }
    if (marginRight !== undefined) {
      styles.marginRight = getStyleSpace(marginRight)
    }
    if (padding !== undefined) {
      styles.padding = getStyleSpace(padding)
    }
    if (paddingX !== undefined) {
      styles.paddingLeft = getStyleSpace(paddingX)
      styles.paddingRight = getStyleSpace(paddingX)
    }
    if (paddingY !== undefined) {
      styles.paddingTop = getStyleSpace(paddingY)
      styles.paddingBottom = getStyleSpace(paddingY)
    }
    if (paddingTop !== undefined) {
      styles.paddingTop = getStyleSpace(paddingTop)
    }
    if (paddingBottom !== undefined) {
      styles.paddingBottom = getStyleSpace(paddingBottom)
    }
    if (paddingLeft !== undefined) {
      styles.paddingLeft = getStyleSpace(paddingLeft)
    }
    if (paddingRight !== undefined) {
      styles.paddingRight = getStyleSpace(paddingRight)
    }

    return styles
  }
}
