import { Component, Prop, Vue } from 'vue-property-decorator'
import { ComponentOptions, CreateElement, RenderContext } from 'vue'
import { injectGlobal } from 'vue-styled-components'
import breakpoint from 'styled-components-breakpoint'
import { genStaticStyles, genSpace } from '../core/util'
import { BREAKPOINTS } from '../core/constant'

injectGlobal`
  .m-col {
      --m-col-span-xs: var(--m-row-cols);
      --m-col-span-sm: var(--m-col-span-xs);
      --m-col-span-md: var(--m-col-span-sm);
      --m-col-span-lg: var(--m-col-span-md);
      --m-col-span-xl: var(--m-col-span-lg);
      --m-col-gutter: 0;
      
      display: flex;
      box-sizing: border-box;
      padding: var(--m-col-gutter);
      ${
        BREAKPOINTS.forEach(point => {
          breakpoint(point)`
            width: calc((var(--m-col-span-${point}) / var(--m-row-cols)) * 100%);
          `
        })
      }
  }
`
const _name = 'm-col'

@Component({
  functional: true
} as ComponentOptions<Vue>)
export default class MCol extends Vue {
  @Prop({ type: String })
  private id!: string

  @Prop({ type: String, default: 'div' })
  private tag!: string

  @Prop({ type: Number })
  private xs!: number

  @Prop({ type: Number })
  private sm!: number

  @Prop({ type: Number })
  private md!: number

  @Prop({ type: Number })
  private lg!: number

  @Prop({ type: Number })
  private xl!: number

  @Prop({ type: [String, Number] })
  private gutter!: string

  render (h: CreateElement, { props, data, children }: RenderContext) {
    const staticClass = data.staticClass !== undefined ? data.staticClass : ''
    data.staticClass = ` ${_name} ${staticClass} `
    data.staticClass = data.staticClass.trim()

    if (!data.staticStyle) {
      data.staticStyle = {}
    }
    if (props.gutter) {
      genSpace(data.staticStyle, _name, 'gutter', props.gutter)
    }
    BREAKPOINTS.forEach((breakpoint: string) => {
      if (props[breakpoint]) {
        genStaticStyles(data.staticStyle, _name, `span-${breakpoint}`, props[breakpoint])
      }
    })
    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }
    return h(props.tag, data, children)
  }
}
