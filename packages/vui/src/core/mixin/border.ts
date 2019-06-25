import { Vue, Component, Mixins, Prop } from 'vue-property-decorator'

type borderType = string | boolean

type BorderStyles = {
  border?: string
  borderLeft?: string
  borderRight?: string
  borderTop?: string
  borderBottom?: string
}

@Component
export default class BorderMixin extends Vue {
  @Prop({ type: Boolean, default: false })
  border!: borderType

  @Prop({ type: Boolean, default: false })
  borderLeft!: borderType

  @Prop({ type: Boolean, default: false })
  borderRight!: borderType

  @Prop({ type: Boolean, default: false })
  borderTop!: borderType

  @Prop({ type: Boolean, default: false })
  borderBottom!: borderType

  get borderStyle () {
    const { border, borderLeft, borderRight, borderTop, borderBottom } = this
    const styles: BorderStyles = {}

    if (!!border) {
      styles.border = 'var(--m-border-base)'
    }
    if (!!borderLeft) {
      styles.borderLeft = 'var(--m-border-base)'
    }
    if (!!borderRight) {
      styles.borderRight = 'var(--m-border-base)'
    }
    if (!!borderTop) {
      styles.borderTop = 'var(--m-border-base)'
    }
    if (!!borderBottom) {
      styles.borderBottom = 'var(--m-border-base)'
    }

    return styles
  }
}
