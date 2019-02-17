import { Vue, Component, Prop } from 'vue-property-decorator'
import { color } from '../constant'

@Component
export default class colorable extends Vue {
  @Prop({ type: String })
  fontColor: color | undefined

  @Prop({ type: String })
  color: color | undefined
}
