import { Vue, Component, Prop } from 'vue-property-decorator'
import { shape, SHAPES } from '../constant'

@Component
export default class shapeable extends Vue {
  @Prop({
    type: String,
    validator(value): boolean {
      return SHAPES.includes(value)
    }
  })
  shape: shape | undefined
}
