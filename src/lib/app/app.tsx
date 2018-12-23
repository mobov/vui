import { Component, Vue } from 'vue-property-decorator'
const _name = 'm-app'

@Component
export default class MApp extends Vue {
  render () {
    const { $slots } = this

    return (
      <div staticClass={_name}>
        {$slots.default}
      </div>
    )
  }
}
