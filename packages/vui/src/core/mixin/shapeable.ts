import { Vue, Component, Prop } from 'vue-property-decorator'
import { shape, SHAPE } from '../constant'

@Component
export default class shapeable extends Vue {
  @Prop({
    type: String,
    validator (value): boolean {
      return SHAPE.includes(value)
    }
  })
  shape: shape | undefined
}
