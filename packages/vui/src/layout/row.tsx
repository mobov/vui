import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import { genStaticStyles } from '../core/util'
import mixSpacePadding from '../core/mixin/space-padding'
import mixSpaceMargin from '../core/mixin/space-margin'
import mixElevation from '../core/mixin/elevation'
import mixSize from '../core/mixin/size'

@Component
export default class MRow extends Mixins (
  mixSpacePadding,
  mixSpaceMargin,
  mixSize,
  mixElevation
) {
  name = 'm-row'

  @Prop({ type: Number })
  cols?: number

  get styles () {
    const styles = {
      ...this.spacePaddingStyle,
      ...this.spaceMarginStyle,
      ...this.sizeStyle,
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
// @Component({
//   functional: true
// } as ComponentOptions<Vue>)
// export default class MRow extends Vue {
//   @Prop({ type: String })
//   id?: string
//
//   @Prop({ type: String, default: 'div' })
//   tag!: string
//
//   @Prop({ type: [String, Number] })
//   gutter?: size
//
//   @Prop({ type: Number })
//   cols?: number
//
//   render (h: CreateElement, { props, data, children }: RenderContext) {
//     const staticClass = data.staticClass ? data.staticClass : ''
//     data.staticClass = `${compName} ${staticClass}`
//     data.staticStyle = data.staticStyle ? data.staticStyle : {}
//     genStaticStyles(data.staticStyle, compName, 'cols', props.cols)
//     genSize(data.staticStyle, `${compName}-gutter`, props.gutter)
//
//     if (props.id) {
//       data.domProps = data.domProps || {}
//       data.domProps.id = props.id
//     }
//
//     return h(props.tag, data, children)
//   }
// }
