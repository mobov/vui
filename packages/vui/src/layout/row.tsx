import { Component, Vue, Prop } from 'vue-property-decorator'
import { genStaticStyles } from '../core/utils'
import mixSpace from '../core/mixins/space'
import mixElevation from '../core/mixins/elevation'
import mixSize from '../core/mixins/size'
import mixColor from '../core/mixins/color'
import mixShape from '../core/mixins/shape'

@Component({
  mixins: [mixColor, mixSize, mixSpace, mixShape, mixElevation]
})
export default class MRow extends Vue {
  name = 'm-row'

  @Prop({ type: Number })
  cols?: number

  get styles () {
    const styles = {
      ...this.spaceStyle,
      ...this.colorStyle,
      ...this.sizeStyle,
    }

    genStaticStyles(styles, this.name, 'cols', this.cols)

    return styles
  }

  get classes () {
    return {
      ...this.shapeClass,
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
