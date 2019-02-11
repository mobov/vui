import { Vue, Component, Prop } from 'vue-property-decorator'
import { shape, SHAPES } from '../constant'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    shape?: shape | undefined
  }
}

@Component
export default class shapeable extends Vue {
  @Prop({
    type: String,
    validator(value): boolean {
      return SHAPES.includes(value)
    }
  })
  public shape: shape | undefined
}
