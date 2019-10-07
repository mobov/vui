import { Vue, Component, Prop } from 'vue-property-decorator'
import { size } from '../constants'
import { getStyleSpace } from '../utils'

declare module 'vue/types/vue' {
  interface Vue {
    margin?: SpaceSize,
    marginX?: SpaceSize,
    marginY?: SpaceSize,
    marginTop?: SpaceSize,
    marginBottom?: SpaceSize,
    marginLeft?: SpaceSize,
    marginRight?: SpaceSize
    padding?: SpaceSize,
    paddingX?: SpaceSize,
    paddingY?: SpaceSize,
    paddingTop?: SpaceSize,
    paddingBottom?: SpaceSize,
    paddingLeft?: SpaceSize,
    paddingRight?: SpaceSize
    spaceStyle: any
    spaceMarginStyle: any
    spacePaddingStyle: any
  }
}
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    margin?: SpaceSize,
    marginX?: SpaceSize,
    marginY?: SpaceSize,
    marginTop?: SpaceSize,
    marginBottom?: SpaceSize,
    marginLeft?: SpaceSize,
    marginRight?: SpaceSize
    padding?: SpaceSize,
    paddingX?: SpaceSize,
    paddingY?: SpaceSize,
    paddingTop?: SpaceSize,
    paddingBottom?: SpaceSize,
    paddingLeft?: SpaceSize,
    paddingRight?: SpaceSize
  }
}

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
    return {
      ...this.spaceMarginStyle,
      ...this.spacePaddingStyle,
    }
  }

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
