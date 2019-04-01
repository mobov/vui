import Mobov from '@mobov/vui'
import { PropsPropertries } from '@/global'

const { Color, ELEVATION, Fill, FILL, DatePickerType, DateValueFormat } = Mobov.constant

const props: Array<PropsPropertries> = [
  {
    name: 'color',
    type: 'radio',
    default: Color.primary,
    value: Object.keys(Color)
  },
  {
    name: 'elevation',
    type: 'radio',
    default: 2,
    value: ELEVATION
  },
  {
    name: 'landscope',
    type: 'radio',
    default: false,
    value: [true, false]
  },
  {
    name: 'desync',
    type: 'radio',
    default: false,
    value: [true, false]
  },
  {
    name: 'ampm',
    type: 'radio',
    default: false,
    value: [true, false]
  },
  {
    name: 'confirmation',
    type: 'radio',
    default: false,
    value: [true, false]
  },
  {
    name: 'pickerType',
    type: 'radio',
    default: DatePickerType.date,
    value: Object.keys(DatePickerType)
  }
]

export default props
