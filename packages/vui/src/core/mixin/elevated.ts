import { Vue, Component, Prop } from 'vue-property-decorator'
import { elevation, ELEVATIONS } from '../constant'

@Component
export default class elevated extends Vue {
  @Prop({
    type: Number,
    validator (val): boolean {
      return typeof val === 'number' && ELEVATIONS.includes(val)
    }
  })
  elevation: elevation | undefined
}

