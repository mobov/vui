import { Vue, Component, Mixins } from 'vue-property-decorator'
import App from './app.style'

const _name = 'm-app'

@Component({
  components: { App }
})
export default class MApp extends Vue {
  render () {
    const { $slots } = this

    return (
      <App staticClass={_name}>
        {$slots.default}
      </App>
    )
  }
}
