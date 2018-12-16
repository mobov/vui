import { CreateElement, VNode, RenderContext } from 'vue'
import { Vue } from 'vue-property-decorator'
const prefix = 'm-icon'

const SIZE: any = {
  xs: 12,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 50
}

const Icons: any = {}

const MIcon = Vue.extend({
  name: prefix,
  functional: true,
  props: {
    name: String,
    color: {
      type: String,
      default: '#000000'
    },
    size: {
      type: [String, Number],
      default: 'sm'
    }
  },
  render (h, { props, data, children, listeners }) {
    const { name } = props
    const icon = Icons[props.name]

    if (icon === undefined) {
      console.error(`存在未注册的图标${name}`)
      return <span />
    }

    const height = SIZE[props.size] ? SIZE[props.size] : props.size
    const width = height * (icon.height / icon.width)
    const staticClasses = data.staticClass !== undefined ? data.staticClass : ''
    const classes = data.class !== undefined ? data.class : ''
    const styles = Object.assign({ fill: 'currentColor' }, data.style, data.staticStyle)
    const click = listeners.click || 'javascript(0)'

    return (
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
        staticClass={`${prefix} ${prefix}__${name} ${staticClasses}`}
        class={classes}
        style={styles}
        height={height}
        width={width}
        viewBox={icon.viewBox}
        onClick={click}>
        {icon.paths ? icon.paths.map((path: string) => <path d={path} />) : <span /> }
        {icon.polygons ? icon.polygons.map((path: string) => <polygon points={path} />) : <span /> }
      </svg>
    )
  }
})

MIcon.register = (data: any = {}): void => {
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

export default MIcon
