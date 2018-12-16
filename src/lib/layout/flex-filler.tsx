import { Vue } from 'vue-property-decorator'

const prefix = 'm-flex-filler'

export default Vue.extend({
  name: prefix,
  functional: true,
  render () {
    return (
      <div class={prefix} />
    )
  }
})
