import { ComponentOptions } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

const _name = 'm-filler'

@Component({
  functional: true
} as ComponentOptions<Vue>)
export default class MFiller extends Vue {
  render () {
    return (
      <div staticClass={_name} />
    )
  }
}
