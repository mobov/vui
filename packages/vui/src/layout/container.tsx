import { Component, Vue, Prop } from 'vue-property-decorator'
import { genStaticStyles } from '../core/utils'
import { BREAKPOINT } from '../core/constants'
import mixSpace from '../core/mixins/space'
import mixSize from '../core/mixins/size'
import mixColor from '../core/mixins/color'

@Component({
  mixins: [mixSpace, mixSize, mixColor]
})
export default class MContainer extends Vue {
  name = 'm-container'

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
    const styles = {
      ...this.spaceStyle,
      ...this.colorStyle,
      ...this.sizeStyle
    }

    BREAKPOINT.forEach((breakpoint: string) => {
      if (this[breakpoint]) {
        genStaticStyles(styles, this.name, breakpoint, this[breakpoint])
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
