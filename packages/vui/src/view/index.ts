import './view.scss'
import MView from './view'

/* istanbul ignore next */
MView.install = (Vue) => {
  Vue.component(MView.name, MView)
}

export default MView
