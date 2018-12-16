import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import { VNode } from 'vue'

const prefix = 'm-app'

@Component
export default class MApp extends Vue {
  private render () {
    return (
      <div staticClass={prefix}>
        {this.$slots.default}
      </div>
    )
  }
}
