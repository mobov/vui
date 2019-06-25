import { Vue, Component, Prop } from 'vue-property-decorator'
import { size } from '../constant'
import { getStyleSpace } from '../util'

type SpaceSize = size | string | number | undefined

type SpaceMarginStyles = {
  margin?: SpaceSize,
  marginX?: SpaceSize,
  marginY?: SpaceSize,
  marginTop?: SpaceSize,
  marginBottom?: SpaceSize,
  marginLeft?: SpaceSize,
  marginRight?: SpaceSize
}

@Component
export default class SpaceMarginMixin extends Vue {
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

  get spaceMarginStyle () {
    const { margin, marginX, marginY, marginTop, marginBottom, marginLeft, marginRight } = this
    const styles: SpaceMarginStyles = {}

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

    return styles
  }
}
