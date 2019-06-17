import { Vue, Component, Prop } from 'vue-property-decorator'
import { variety, VARIETY } from '../constant'
import { genVariety } from '../util'

@Component
export default class VarietyMixin extends Vue {
  @Prop({
    type: String,
    validator (value): boolean {
      return VARIETY.includes(value)
    }
  })
  variety?: variety

  get varietyClass () {
    const classes = {}

    genVariety(classes, this.variety)

    return classes
  }
}
