import { Vue, Component } from 'vue-property-decorator'

@Component
export default class MApp extends Vue {
  name = 'm-app'

  render () {
    const { $slots } = this

    return (
      <div staticClass={this.name}>
        {$slots.default}
      </div>
    )
  }
}
