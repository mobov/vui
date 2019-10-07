import { Component, Prop, Vue } from 'vue-property-decorator'
import { size, Size } from '../core/constants'

const SIZE: any = {
  xs: 12,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 50
}

const Icons: any = {}

@Component
export default class MIcon extends Vue {
  name = 'm-icon'

  @Prop({ type: String })
  value!: string

  @Prop({ type: [String, Number], default: Size.sm })
  size!: size | string | number

  static register (data: any = {}): void {
    for (const item in data) {
      if (data.hasOwnProperty(item)) {
        const icon = data[item]
        if (icon.d) {
          if (!icon.paths) {
            icon.paths = []
          }
          icon.paths.push({ d: icon.d })
        }

        if (icon.points) {
          if (!icon.polygons) {
            icon.polygons = []
          }
          icon.polygons.push({ points: icon.points })
        }

        Icons[item] = icon
      }
    }
  }

  render () {
    const { name, value, $slots, size } = this
    const icon = Icons[value]
    if (!icon) {
      console.error(`存在未注册的图标${value}`)
      return (<span/>)
    }
    const height = SIZE[size] ? SIZE[size] : size
    const width = height * (icon.height / icon.width)

    return (
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
           staticClass={`${name} ${name}__${value}`}
           height={height}
           width={width}
           viewBox={icon.viewBox}>
        {icon.paths ? icon.paths.map((path: string) => <path d={path} />) : <span /> }
        {icon.polygons ? icon.polygons.map((path: string) => <polygon points={path} />) : <span /> }
      </svg>
    )
  }
}
