import { Vue, Component, Prop } from 'vue-property-decorator'
import { variety, VARIETY } from '../constants'
import { genVariety } from '../utils'

declare module 'vue/types/vue' {
  interface Vue {
    variety?: variety
    varietyClass?: any
  }
}

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
