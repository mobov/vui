import { Component, Mixins } from 'vue-property-decorator'
import AppBar from './app-bar.style'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import elevated from '../core/mixin/elevated'
import variable from '../core/mixin/variable'

const _name = 'm-app-bar'

@Component({
  components: { AppBar }
})
export default class MAppBar extends Mixins (
  colorable,
  elevated,
  sizeable,
  variable
) {
  render () {
    const { $slots, fontColor, size, color, variety } = this

    return (
      <AppBar staticClass={_name}
              fontColor={fontColor}
              color={color}
              variety={variety}
              size={size}>
        {$slots.default}
      </AppBar>
    )
  }
}
