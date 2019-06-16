import { Vue, Component, Prop } from 'vue-property-decorator'
import { color, elevation, ELEVATION } from './constant'
import { genColor, genElevation, genFontColor } from './util'

export default class VuiComponent extends Vue {
  constructor () {
    super()
  }
  name!: string
}
