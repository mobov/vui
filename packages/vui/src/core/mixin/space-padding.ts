import { Vue, Component, Prop } from 'vue-property-decorator'
import { size } from '../constant'
import { getStyleSpace } from '../util'

type SpaceSize = size | string | number | undefined

type SpacePaddingStyles = {
  padding?: SpaceSize,
  paddingX?: SpaceSize,
  paddingY?: SpaceSize,
  paddingTop?: SpaceSize,
  paddingBottom?: SpaceSize,
  paddingLeft?: SpaceSize,
  paddingRight?: SpaceSize
}

@Component
export default class SpacePaddingMixin extends Vue {
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

  get spacePaddingStyle () {
    const { padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight } = this
    const styles: SpacePaddingStyles = {}

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
