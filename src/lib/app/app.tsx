import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import { VNode } from 'vue'

const _name = 'm-app'

@Component
export default class MApp extends Vue {
  render () {
    return (
      <div staticClass={_name}>
        {this.$slots.default}
      </div>
    )
  }
}
