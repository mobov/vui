import './time-picker.scss'
import '../core/date'
import MTimePicker from './time-picker'

MTimePicker.install = (Vue) => {
  Vue.component('MTimePicker', MTimePicker)
}

export default MTimePicker
