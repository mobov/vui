import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
import mixColor from './color'
import mixSize from './size'
import mixSpace from './space'
import mixElevation from './elevation'
import mixBorder from './border'

@Component
export default class BaseMixin extends Mixins (
  mixColor,
  mixSize,
  mixSpace,
  mixElevation,
  mixBorder
) {
  get baseStyle () {
    return {
      ...this.colorStyle,
      ...this.spaceStyle,
      ...this.sizeStyle,
      ...this.borderStyle
    }
  }

  get baseClass () {
    return {
      ...this.elevationClass
    }
  }
}
