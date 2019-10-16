import './popover.scss'
import MPopover from './popover'
/* istanbul ignore next */
MPopover.install = (Vue) => {
  Vue.component('MPopover', MPopover)
}

export default MPopover
