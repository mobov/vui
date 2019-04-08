import './fade.scss'
import './slide.scss'
import './expansion.scss'
import MTransitionExpansion from './expansion'

/* istanbul ignore next */
MTransitionExpansion.install = (Vue) => {
  Vue.component('MTransitionExpansion', MTransitionExpansion)
}

export {
  MTransitionExpansion
}
