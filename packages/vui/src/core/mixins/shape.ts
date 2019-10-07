import { Vue, Component, Prop } from 'vue-property-decorator'
import { shape, SHAPE } from '../constants'
import { genShape } from '../utils'

declare module 'vue/types/vue' {
  interface Vue {
    shape?: shape
    shapeClass: any
  }
}

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
