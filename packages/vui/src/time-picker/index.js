import '../core/date'
import './time-picker.scss'
import MTimePicker from './time-picker'

MTimePicker.install = (Vue) => {
  Vue.component(MTimePicker.name, MTimePicker)
}

export default MTimePicker
