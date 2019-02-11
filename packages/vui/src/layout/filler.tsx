import { ComponentOptions } from 'vue'
import { Component, Vue } from 'vue-property-decorator'
import { injectGlobal } from 'vue-styled-components'

injectGlobal`
  .m-filler {
    flex-grow: 1!important;
    background-color: transparent;
  }
`

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
