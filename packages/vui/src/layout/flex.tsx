import { ComponentOptions, CreateElement, RenderContext } from 'vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { genStaticStyles, genSpace } from '../core/util'
import { FlexAlign, flexAlign, FlexJustify, flexJustify, FlexWrap, flexWrap } from '../core/constant'

const compName = 'm-flex'

@Component({
  functional: true
} as ComponentOptions<Vue>)
export default class MFlex extends Vue {
  @Prop({ type: String })
  id?: string

  @Prop({ type: String, default: 'div' })
  tag!: string

  @Prop({ type: Boolean, default: false })
  inline!: boolean

  @Prop({ type: String, default: FlexWrap.normal })
  wrap!: FlexWrap

  @Prop({ type: String, default: FlexJustify.start })
  justify!: FlexJustify

  @Prop({ type: String, default: FlexAlign.stretch })
  align!: FlexAlign

  render (h: CreateElement, { props, data, children }: RenderContext) {
    const staticClass = data.staticClass ? data.staticClass : ''
    data.staticClass = `${compName} m--wrap-${props.wrap} m--justify-${props.justify} m--align-${props.align} ${staticClass} `
    data.staticClass += props.inline ? 'm--inline' : ''
    data.staticClass = data.staticClass.trim()
    data.staticStyle = data.staticStyle ? data.staticStyle : {}

    genStaticStyles(data.staticStyle, compName, 'cols', props.cols)

    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }

    return h(props.tag, data, children)
  }
}
