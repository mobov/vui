import { ComponentOptions, CreateElement, RenderContext } from 'vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { genStaticStyles } from '@/lib/core/style-gen'

const _name = 'm-row'

@Component({
  functional: true
} as ComponentOptions<Vue>)
export default class MRow extends Vue {
  @Prop({ type: String })
  private id!: string

  @Prop({ type: String, default: 'div' })
  private tag!: string

  @Prop({ type: String, default: 'normal' })
  private wrap!: string

  @Prop({ type: String, default: 'start' })
  private justify!: string

  @Prop({ type: String, default: 'stretch' })
  private align!: string

  @Prop({ type: String, default: 'xs' })
  private space!: string

  @Prop({ type: Number })
  private cols!: number

  render (h: CreateElement, { props, data, children }: RenderContext) {
    data.staticClass = data.staticClass !== undefined ? data.staticClass : ''
    data.staticClass += `${_name} ${_name}--wrap-${props.wrap} ${_name}--justify-${props.justify} ${_name}--align-${props.align} `
    if (props.space) { data.staticClass += `${_name}--space-${props.space}` }
    data.staticClass = data.staticClass.trim()

    if (props.cols) {
      if (!data.staticStyle) {
        data.staticStyle = {}
      }
      genStaticStyles(data.staticStyle, _name, 'cols', props.cols)
    }

    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }

    return h(props.tag, data, children)
  }
}
