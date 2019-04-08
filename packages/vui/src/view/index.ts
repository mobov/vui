import './view.scss'
import MView from './view'

/* istanbul ignore next */
MView.install = (Vue) => {
  Vue.component('MView', MView)
}

export default MView
