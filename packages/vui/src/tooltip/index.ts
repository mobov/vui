import './tooltip.scss'
import MTooltip from './tooltip'
/* istanbul ignore next */
MTooltip.install = (Vue) => {
  Vue.component('MTooltip', MTooltip)
}

export default MTooltip
