import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import mixBase from '../core/mixin/base'
import { FlexAlign, flexAlign, FlexJustify, flexJustify, FlexWrap, flexWrap } from '../core/constant'

@Component
export default class MFlex extends Mixins (
  mixBase
) {
  name = 'm-flex'

  @Prop({ type: String })
  id?: string

  @Prop({ type: String, default: 'div' })
  tag!: string

  @Prop({ type: Boolean, default: false })
  block!: boolean

  @Prop({ type: String, default: FlexWrap.normal })
  wrap: FlexWrap = FlexWrap.normal

  @Prop({ type: String, default: FlexJustify.start })
  justify: FlexJustify = FlexJustify.start

  @Prop({ type: String, default: FlexAlign.stretch })
  align: FlexAlign = FlexAlign.start

  get styles () {
    return {
      ...this.baseStyle
    }
  }

  get classes () {
    const { wrap, justify, align, block } = this
    return {
      ...this.baseClass,
      [`m--wrap-${wrap}`] : true,
      [`m--justify-${justify}`] : true,
      [`m--align-${align}`] : true,
      [`m--block`] : block,
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

  // render (h: CreateElement, { props, data, children }: RenderContext) {
  //   const staticClass = data.staticClass ? data.staticClass : ''
  //   data.staticClass = `${compName} m--wrap-${props.wrap} m--justify-${props.justify} m--align-${props.align} ${staticClass} `
  //   data.staticClass += props.inline ? 'm--inline' : ''
  //   data.staticClass = data.staticClass.trim()
  //   data.staticStyle = data.staticStyle ? data.staticStyle : {}
  //
  //   genStaticStyles(data.staticStyle, compName, 'cols', props.cols)
  //
  //   if (props.id) {
  //     data.domProps = data.domProps || {}
  //     data.domProps.id = props.id
  //   }
  //
  //   return h(props.tag, data, children)
  // }
}
