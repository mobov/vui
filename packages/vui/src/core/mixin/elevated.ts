import { Vue, Component, Prop } from 'vue-property-decorator'
import { elevation, ELEVATION } from '../constant'

@Component
export default class elevated extends Vue {
  @Prop({
    type: Number,
    validator (value): boolean {
      return ELEVATION.includes(value)
    }
  })
  elevation: elevation | undefined
}

