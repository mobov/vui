import { Vue, Component, Mixins } from 'vue-property-decorator'
import mixSpaceMargin from './space-margin'
import mixSpacePadding from './space-padding'

@Component
export default class SpaceMixin extends Mixins (
  mixSpaceMargin,
  mixSpacePadding
) {
  get spaceStyle () {
    return {
      ...this.spaceMarginStyle,
      ...this.spacePaddingStyle,
    }
  }
}
