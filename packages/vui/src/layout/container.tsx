import { Vue, Component, Prop } from 'vue-property-decorator'
import { ComponentOptions, CreateElement, RenderContext } from 'vue'

const compName = 'm-container'

@Component({
  functional: true
} as ComponentOptions<Vue>)
export default class MContainer extends Vue {
  @Prop({ type: String })
  id!: string

  @Prop({ type: String, default: 'div' })
  tag!: string

  render (h: CreateElement, { props, data, children }: RenderContext) {
    const staticClass = data.staticClass ? data.staticClass : ''
    data.staticClass = `${compName} ${staticClass}`

    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }
    return h(props.tag, data, children)
  }
}
