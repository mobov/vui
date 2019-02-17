import { ComponentOptions, CreateElement, RenderContext } from 'vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { genStaticStyles, genSize } from '../core/util'
import { size } from '../core/constant'

const compName = 'm-row'

@Component({
  functional: true
} as ComponentOptions<Vue>)
export default class MRow extends Vue {
  @Prop({ type: String })
  id?: string

  @Prop({ type: String, default: 'div' })
  tag!: string

  @Prop({ type: [String, Number] })
  gutter?: size

  @Prop({ type: Number })
  cols?: number

  render (h: CreateElement, { props, data, children }: RenderContext) {
    const staticClass = data.staticClass ? data.staticClass : ''
    data.staticClass = `${compName} ${staticClass}`
    data.staticStyle = data.staticStyle ? data.staticStyle : {}
    genStaticStyles(data.staticStyle, compName, 'cols', props.cols)
    genSize(data.staticStyle, `${compName}-gutter`, props.gutter)

    console.log(data)
    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }

    return h(props.tag, data, children)
  }
}
