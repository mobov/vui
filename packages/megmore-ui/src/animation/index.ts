import Ripple from './ripple'
import { VueConstructor } from 'vue'

export {
  Ripple,
  ClickOutside,
}

export default function install(Vue) {
  Vue.directive(Ripple.name, Ripple)
  Vue.directive(ClickOutside.name, ClickOutside)
}
