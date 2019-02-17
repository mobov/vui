import Megmore from '@megmore/vui'
import { PropsPropertries } from '@/global'
const { COLOR, Color, SIZE, Size, VARIETY, ELEVATION } = Megmore.constant

const props: Array<PropsPropertries> = [
  {
    name: 'size',
    type: 'radio',
    default: Size.md,
    value: SIZE
  },
  {
    name: 'color',
    type: 'radio',
    default: Color.primary,
    value: COLOR
  },
  {
    name: 'elevation',
    type: 'radio',
    default: 2,
    value: ELEVATION
  },
  {
    name: 'variety',
    type: 'radio',
    default: 'normal',
    value: VARIETY
  }
]

export default props
