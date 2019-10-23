import './modal.scss'
import MModal from './modal'
/* istanbul ignore next */
MModal.install = (Vue) => {
  Vue.component('MPopover', MModal)
}

export default MModal
