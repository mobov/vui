import Mobov from '@mobov/vui'
import { PropsPropertries } from '@/global'

const { SIZE, Size, Fill, FILL } = Mobov.constant

const props: Array<PropsPropertries> = [
  {
    name: 'fillHeader',
    type: 'radio',
    default: Fill.both,
    value: FILL
  },
  {
    name: 'fillFooter',
    type: 'radio',
    default: Fill.both,
    value: FILL
  },
  {
    name: 'headerSize',
    type: 'radio',
    default: 'default',
    value: ['default', 'sticky', 'none']
  },
  {
    name: 'footerSize',
    type: 'radio',
    default: 'multi',
    value: ['multi', 'single', 'none']
  },
  {
    name: 'leftSize',
    type: 'radio',
    default: true,
    value: [true, false]
  },
  {
    name: 'rightSize',
    type: 'radio',
    default: 'multi',
    value: ['multi', 'single', 'none']
  },
  {
    name: 'headerIndex',
    type: 'radio',
    default: false,
    value: [true, false]
  },
  {
    name: 'footerIndex',
    type: 'radio',
    default: 'row',
    value: ['row', 'cell', 'none']
  },
  {
    name: 'leftIndex',
    type: 'radio',
    default: false,
    value: [true, false]
  },
  {
    name: 'rightIndex',
    type: 'radio',
    default: 'row',
    value: ['row', 'cell', 'none']
  }
]

export default props
