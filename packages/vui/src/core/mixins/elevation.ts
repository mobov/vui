import { Vue, Component, Prop } from 'vue-property-decorator'
import { elevation, ELEVATION } from '../constants'
import { genElevation } from '../utils'

declare module 'vue/types/vue' {
  interface Vue {
    elevation?: elevation | undefined
    elevationClass: any
  }
}

@Component
export default class ElevationMixin extends Vue {
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

