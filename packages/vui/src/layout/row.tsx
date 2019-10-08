import { Component, Vue, Prop } from 'vue-property-decorator'
import { genStaticStyles, getStyleSize } from '../core/utils'
import mixSpace from '../core/mixins/space'
import mixElevation from '../core/mixins/elevation'
import mixSize from '../core/mixins/size'
import mixColor from '../core/mixins/color'

@Component({
  mixins: [mixColor, mixSize, mixSpace, mixElevation]
})
export default class MRow extends Vue {
  name = 'm-row'

  @Prop({ type: Number })
  cols?: number

  @Prop({ type: [Number, String] })
  gutter?: number | string

  get styles () {
    const styles = {
      ...this.spaceStyle,
      ...this.colorStyle,
      ...this.sizeStyle,
      '--m-row-gutter': getStyleSize(this.gutter)
    }

    genStaticStyles(styles, this.name, 'cols', this.cols)


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
