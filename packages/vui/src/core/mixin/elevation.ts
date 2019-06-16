import { Vue, Component, Prop } from 'vue-property-decorator'
import VuiComponent from '../vuiComponent'
import { color, elevation, ELEVATION } from '../constant'
import { genElevation } from '../util'

@Component
export default class ElevationMixin extends VuiComponent {
  @Prop({
    type: Number,
    validator (value): boolean {
      return ELEVATION.includes(value)
    }
  })
  elevation!: elevation | undefined

  get elevationStyle () {
    const styles = {}
    genElevation(styles, this.name, this.elevation)

    return styles
  }
}

