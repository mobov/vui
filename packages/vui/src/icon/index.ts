import MIcon, { register } from './icon'

MIcon.install = (Vue) => {
  Vue.component('MIcon', MIcon)
}

export default MIcon
export {
  register
}
