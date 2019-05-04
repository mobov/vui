import Mobov from '@mobov/vui'
import { PropsPropertries } from '@/global'

const { Fill, FILL } = Mobov.constant

const props: Array<PropsPropertries> = [
  {
    name: 'transition',
    type: 'radio',
    default: true,
    value: [true, false]
  },
  {
    name: 'headerSlot',
    type: 'radio',
    default: true,
    value: [true, false]
  },
  {
    name: 'footerSlot',
    type: 'radio',
    default: true,
    value: [true, false]
  },
  {
    name: 'leftSlot',
    type: 'radio',
    default: true,
    value: [true, false]
  },
  {
    name: 'rightSlot',
    type: 'radio',
    default: true,
    value: [true, false]
  },
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
    default: 50,
    value: [0, 50, 100]
  },
  {
    name: 'footerSize',
    type: 'radio',
    default: 50,
    value: [0, 50, 100]
  },
  {
    name: 'leftSize',
    type: 'radio',
    default: 100,
    value: [0, 100, 300]
  },
  {
    name: 'rightSize',
    type: 'radio',
    default: 100,
    value: [0, 100, 300]
  },
  {
    name: 'headerIndex',
    type: 'radio',
    default: 3,
    value: [0, 1, 2, 3]
  },
  {
    name: 'footerIndex',
    type: 'radio',
    default: 2,
    value: [0, 1, 2, 3]
  },
  {
    name: 'leftIndex',
    type: 'radio',
    default: 1,
    value: [0, 1, 2, 3]
  },
  {
    name: 'rightIndex',
    type: 'radio',
    default: 0,
    value: [0, 1, 2, 3]
  }
]

export default props
