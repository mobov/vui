import './frame.scss'
import MFrame from './frame'

/* istanbul ignore next */
MFrame.install = (Vue) => {
  Vue.component('MFrame', MFrame)
}

export default MFrame
