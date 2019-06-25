import './panel.scss'
import MPanel from './panel'

/* istanbul ignore next */
MPanel.install = (Vue) => {
  Vue.component('MPanel', MPanel)
}

export default MPanel
