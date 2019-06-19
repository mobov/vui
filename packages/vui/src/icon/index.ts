import MIcon from './icon'
import menu from './icons/menu'
import close from './icons/close'
import search from './icons/search'
import navigate_before from './icons/navigate_before'
import navigate_next from './icons/navigate_next'
import arrow_drop_down from './icons/arrow_drop_down'
import cancel from './icons/cancel'
import check_box from './icons/check_box'
import check_box_outline_blank from './icons/check_box_outline_blank'
import indeterminate_check_box from './icons/indeterminate_check_box'
import radio_button_checked from './icons/radio_button_checked'
import radio_button_unchecked from './icons/radio_button_unchecked'
import check from './icons/check'
import info_outline from './icons/info_outline'
import warning from './icons/warning'
import error from './icons/error'
import keyboard_arrow_down from './icons/keyboard_arrow_down'
import keyboard_arrow_up from './icons/keyboard_arrow_up'
import keyboard_arrow_right from './icons/keyboard_arrow_right'
import add from './icons/add'
import remove from './icons/remove'
import arrow_upward from './icons/arrow_upward'
import arrow_downward from './icons/arrow_downward'

// MIcon.register = register
MIcon.install = (Vue) => {
  Vue.component('MIcon', MIcon)
  MIcon.register(menu)
  MIcon.register(close)
  MIcon.register(search)
  MIcon.register(menu)
  MIcon.register(navigate_before)
  MIcon.register(navigate_next)
  MIcon.register(arrow_drop_down)
  MIcon.register(cancel)
  MIcon.register(check_box)
  MIcon.register(check_box_outline_blank)
  MIcon.register(indeterminate_check_box)
  MIcon.register(radio_button_checked)
  MIcon.register(radio_button_unchecked)
  MIcon.register(check)
  MIcon.register(info_outline)
  MIcon.register(warning)
  MIcon.register(error)
  MIcon.register(keyboard_arrow_down)
  MIcon.register(keyboard_arrow_up)
  MIcon.register(keyboard_arrow_right)
  MIcon.register(add)
  MIcon.register(remove)
  MIcon.register(arrow_upward)
  MIcon.register(arrow_downward)
}

export default MIcon
