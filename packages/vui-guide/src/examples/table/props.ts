import Megmore from '@megmore/vui'

interface PropsPropertries {
  name: string,
  type: string,
  default: any,
  value: any
}

const props: Array<PropsPropertries> =  [
  {
    name: 'size',
    type: 'radio',
    default: 'md',
    value: Megmore.constant.BREAKPOINTS
  },
  {
    name: 'border',
    type: 'radio',
    default: true,
    value: [true, false]
  },
  {
    name: 'header',
    type: 'radio',
    default: 'default',
    value: ['default', 'sticky', 'none']
  },
  {
    name: 'expand',
    type: 'radio',
    default: 'multi',
    value: ['multi', 'single', 'none']
  },
  {
    name: 'row-expand',
    type: 'radio',
    default: true,
    value: [true, false]
  },
  {
    name: 'select',
    type: 'radio',
    default: 'multi',
    value: ['multi', 'single', 'none']
  },
  {
    name: 'row-select',
    type: 'radio',
    default: false,
    value: [true, false]
  },
  {
    name: 'hover',
    type: 'radio',
    default: 'row',
    value: ['row', 'cell', 'none']
  }
]

export default props
