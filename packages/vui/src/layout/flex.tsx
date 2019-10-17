import { Component, Vue, Prop } from 'vue-property-decorator'
import { FlexAlign, flexAlign, FlexJustify, flexJustify, FlexWrap, flexWrap, FlexDirection } from '../core/constants'
import mixShape from '../core/mixins/shape'
import mixColor from '../core/mixins/color'
import mixSize from '../core/mixins/size'
import mixSpace from '../core/mixins/space'
import minElevation from '../core/mixins/elevation'

@Component({
  mixins: [mixColor, mixSize, mixSpace, mixShape, minElevation]
})
export default class MFlex extends Vue {
  name = 'm-flex'

  @Prop({ type: Boolean, default: false })
  block!: boolean

  @Prop({ type: String, default: FlexWrap.normal })
  wrap!: FlexWrap

  @Prop({ type: String, default: FlexJustify.start })
  justify!: FlexJustify

  @Prop({ type: String, default: FlexAlign.center })
  align!: FlexAlign

  @Prop({ type: String, default: FlexDirection.row })
  direction!: FlexDirection

  get styles () {
    return {
      ...this.colorStyle,
      ...this.spaceStyle,
      ...this.sizeStyle
    }
  }

  get classes () {
    const { wrap, justify, align, block, direction } = this
    return {
      ...this.shapeClass,
      ...this.elevationClass,
      [`m--wrap-${wrap}`]: true,
      [`m--justify-${justify}`]: true,
      [`m--align-${align}`]: true,
      [`m--direction-${direction}`]: true,
      [`m--block`]: block
    }
  }

  render () {
    const { name, $slots, classes, styles } = this

    return (
      <div staticClass={name}
           style={styles}
           class={classes}>
        {$slots.default}
      </div>
    )
  }
}
