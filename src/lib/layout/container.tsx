import { Vue } from 'vue-property-decorator'

const prefix = 'm-container'

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
    }
  },
  render (h, { props, data, children }) {
    const staticClass = data.staticClass !== undefined ? data.staticClass : ''
    data.staticClass = `${prefix} ${staticClass}`.trim()

    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }
    return h(props.tag, data, children)
  }
})
