import './style.scss'
import MTransition from './transition'

/* istanbul ignore next */
MTransition.install = (Vue) => {
  Vue.component('MTransition', MTransition)
}

export default MTransition
