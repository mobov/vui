import { Vue, Component, Prop } from 'vue-property-decorator'
import { breakpoint} from '../constant'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    size?: breakpoint | string | number | undefined
  }
}

@Component
export default class sizeable extends Vue {
  @Prop({ type: [String, Number] })
  public size: string | number | undefined
}
