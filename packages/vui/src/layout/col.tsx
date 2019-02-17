import { Vue, Component, Prop } from 'vue-property-decorator'
import { ComponentOptions, CreateElement, RenderContext } from 'vue'
import { genStaticStyles, genSpace } from '../core/util'
import { BREAKPOINT } from '../core/constant'

const compName = 'm-col'

@Component({
  functional: true
} as ComponentOptions<Vue>)
export default class MCol extends Vue {
  @Prop({ type: String })
  id?: string

  @Prop({ type: String, default: 'div' })
  tag!: string

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

  render (h: CreateElement, { props, data, children }: RenderContext) {
    const staticClass = data.staticClass ? data.staticClass : ''
    data.staticClass = `${compName} ${staticClass}`
    data.staticStyle = data.staticStyle ? data.staticStyle : {}

    genSpace(data.staticStyle, compName, props.space)
    BREAKPOINT.forEach((breakpoint: string) => {
      if (props[breakpoint]) {
        genStaticStyles(data.staticStyle, compName, `span-${breakpoint}`, props[breakpoint])
      }
    })
    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }
    return h(props.tag, data, children)
  }
}
