import '@/lib/core/date'
import MTimePicker from './time-picker'
/* istanbul ignore next */
MTimePicker.install = (Vue) => {
  Vue.component(MTimePicker.name, MTimePicker)
}

export default MTimePicker
