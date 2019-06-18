import { Vue, Component, Prop } from 'vue-property-decorator'
import { elevation, ELEVATION } from '../constant'
import { genElevation } from '../util'

@Component
export default class ElevationMixin extends Vue {
  name!: string

  @Prop({
    type: Number,
    validator (value): boolean {
      return ELEVATION.includes(value)
    }
  })
  elevation!: elevation | undefined

  get elevationClass () {
    const classes = {}

    genElevation(classes, this.elevation)

    return classes
  }
}

