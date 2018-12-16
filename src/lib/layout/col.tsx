import { BREAKPOINT, BREAKPOINTS } from '@/lib/core/constant'
import { Vue } from 'vue-property-decorator'
import { genStaticStyles } from '@/lib/core/style-gen'

const prefix = 'm-col'

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
    xs: {
      type: Number
    },
    sm: {
      type: Number
    },
    md: {
      type: Number
    },
    lg: {
      type: Number
    },
    xl: {
      type: Number
    }
  },
  render: function (h, { props, data, children }) {
    const staticClass = data.staticClass !== undefined ? data.staticClass : ''
    data.staticClass = `${prefix} ${staticClass} `
    data.staticClass = data.staticClass.trim()

    if (!(data.staticStyle)) {
      data.staticStyle = {}
    }
    console.log(props)
    BREAKPOINTS.forEach(breakpoint => {
      if (props[breakpoint]) {
        genStaticStyles(data.staticStyle, prefix, `span-${breakpoint}`, props[breakpoint])
      }
    })
    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }
    return h(props.tag, data, children)
  }
})
