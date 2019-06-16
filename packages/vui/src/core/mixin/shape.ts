import { Vue, Component, Prop } from 'vue-property-decorator'
import VuiComponent from '../vuiComponent'
import { shape, SHAPE } from '../constant'
import { genShape } from '../util'

@Component
export default class ShapeMixin extends VuiComponent {
  @Prop({
    type: String,
    validator (value): boolean {
      return SHAPE.includes(value)
    }
  })
  shape?: shape

  get shapeClass () {
    const classes = {}

    genShape(classes, this.shape)

    return classes
  }
}
