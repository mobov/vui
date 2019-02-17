import { Vue, Component, Prop } from 'vue-property-decorator'
import { variety, VARIETY } from '../constant'

@Component
export default class variable extends Vue {
  @Prop({
    type: String,
    validator (value): boolean {
      return VARIETY.includes(value)
    }
  })
  variety: variety | undefined
}
