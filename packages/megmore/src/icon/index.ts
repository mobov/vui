import MIcon from './icon'
import './presets'

/* istanbul ignore next */
MIcon.install = (Vue) => {
  Vue.component(MIcon.name, MIcon)
}

export default MIcon
