import { Component, Vue, Prop } from 'vue-property-decorator'
import { genStaticStyles } from '../core/utils'
import { BREAKPOINT } from '../core/constants'

@Component
export default class MCol extends Vue {
  name = 'm-col'

  @Prop({ type: Number })
  xs?: number

  @Prop({ type: Number })
  sm?: number

  @Prop({ type: Number })
  md?: number

  @Prop({ type: Number })
  lg?: number

  @Prop({ type: Number })
  xl?: number

  get styles () {
    const styles = {}

    BREAKPOINT.forEach((breakpoint: string) => {
      if (this[breakpoint]) {
        genStaticStyles(styles, this.name, `span-${breakpoint}`, this[breakpoint])
      }
    })

    return styles
  }

  get classes () {
    return {
      ...this.elevationClass
    }
  }

  render () {
    const { name, $slots, styles, classes } = this

    return (
      <div staticClass={name}
           class={classes}
           style={styles}>
        {$slots.default}
      </div>
    )
  }
}
