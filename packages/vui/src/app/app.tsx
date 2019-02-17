import { Vue, Component } from 'vue-property-decorator'

@Component
export default class MApp extends Vue {
  render () {
    const { $slots } = this

    return (
      <div staticClass="m-app">
        {$slots.default}
      </div>
    )
  }
}
