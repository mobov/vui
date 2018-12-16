import { Vue } from 'vue-property-decorator'
import { genStaticStyles } from '@/lib/core/style-gen'
import { BREAKPOINT } from '@/lib/core/constant'

const prefix = 'm-row'

export default Vue.extend({
  name: prefix,
  functional: true,
  props: {
    id: {
      type: String
    },
    tag: {
      type: String,
      default: 'div'
    },
    wrap: {
      type: String,
      default: 'normal'
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'stretch'
    },
    space: {
      type: String,
      default: BREAKPOINT.xs
    },
    cols: {
      type: Number
    }
  },
  render (h, { props, data, children }) {
    data.staticClass = data.staticClass !== undefined ? data.staticClass : ''
    data.staticClass += `${prefix} ${prefix}--wrap-${props.wrap} ${prefix}--justify-${props.justify} ${prefix}--align-${props.align} `
    if (props.space) { data.staticClass += `${prefix}--space-${props.space}` }
    data.staticClass = data.staticClass.trim()

    if (props.cols) {
      if (!data.staticStyle) {
        data.staticStyle = {}
      }
      genStaticStyles(data.staticStyle, prefix, 'cols', props.cols)
    }

    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }

    return h(props.tag, data, children)
  }
})
