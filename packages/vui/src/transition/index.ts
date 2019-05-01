import './fade.scss'
import './slide.scss'
import './expansion.scss'
// import MTransitionExpansion from './expansion'
//
// /* istanbul ignore next */
// MTransitionExpansion.install = (Vue) => {
//   Vue.component('MTransitionExpansion', MTransitionExpansion)
// }
//
// export {
//   MTransitionExpansion
// }

import MTransition from './transition'

/* istanbul ignore next */
MTransition.install = (Vue) => {
  Vue.component('MTransition', MTransition)
}

export default MTransition

