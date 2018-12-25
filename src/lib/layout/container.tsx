import { Component, Prop, Vue } from 'vue-property-decorator'
import { ComponentOptions, CreateElement, RenderContext } from 'vue'

const _name = 'm-container'

@Component({
  functional: true
} as ComponentOptions<Vue>)
export default class MContainer extends Vue {
  @Prop({ type: String })
  private id!: string

  @Prop({ type: String, default: 'div' })
  private tag!: string

  render (h: CreateElement, { props, data, children }: RenderContext) {
    const staticClass = data.staticClass !== undefined ? data.staticClass : ''
    data.staticClass = `${_name} ${staticClass}`.trim()

    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }
    return h(props.tag, data, children)
  }
}
