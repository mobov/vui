import { Vue, Component, Prop } from 'vue-property-decorator'
import { shape, SHAPE } from '../constant'
import { genShape } from '../util'

@Component
export default class ShapeMixin extends Vue {
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
