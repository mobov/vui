import { Vue, Component, Prop } from 'vue-property-decorator'
import { elevation, ELEVATIONS } from '../constant'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    shape?: elevation | undefined
  }
}

@Component
export default class elevated extends Vue {
  @Prop({
    type: Number,
    validator (val): boolean {
      return typeof val === 'number' && ELEVATIONS.includes(val)
    }
  })
  public elevation: elevation | undefined
}

