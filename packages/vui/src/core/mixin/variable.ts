import { Vue, Component, Prop } from 'vue-property-decorator'
import { VARIETYS, variety } from '../constant'

@Component
export default class variable extends Vue {
  @Prop({
    type: String,
    validator(value): boolean {
      return VARIETYS.includes(value)
    }
  })
  variety: variety | undefined
}
