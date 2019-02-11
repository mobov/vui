import { Vue, Component, Prop } from 'vue-property-decorator'
import { VARIETYS, variety } from '../constant'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    variety?: variety | undefined
  }
}

@Component
export default class variable extends Vue {
  @Prop({
    type: String,
    validator(value): boolean {
      return VARIETYS.includes(value)
    }
  })
  public variety: variety | undefined
}
