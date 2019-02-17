import { Vue, Component, Prop } from 'vue-property-decorator'
import { size } from '../constant'

@Component
export default class sizeable extends Vue {
  @Prop({ type: [String, Number] })
  size: size | string | number | undefined
}
