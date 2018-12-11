import './avatar.scss'
import MAvatar from './avatar'

/* istanbul ignore next */
MAvatar.install = (Vue) => {
  Vue.component(MAvatar.name, MAvatar)
}

export default MAvatar
