import Vue from 'vue'

const _name = 'm-icon'

const SIZE = {
  xs: 12,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 50
}

const Icons = {}

export default Vue.extend({
  name: 'MIcon',
  functional: true,
  register (data = {}) {
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
  },
  props: {
    name: {
      type: String
    },
    size: {
      type: [String, Number],
      default: 'sm'
    },
    color: {
      type: String,
      default: '#000000'
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
    const click = listeners.click || function () {}

    return (
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
           staticClass={`${_name} ${_name}__${name} ${staticClasses}`}
           class={classes}
           style={styles}
           height={height}
           width={width}
           viewBox={icon.viewBox}
           onClick={() => click}>
        {icon.paths ? icon.paths.map((path) => <path d={path} />) : <span /> }
        {icon.polygons ? icon.polygons.map((path) => <polygon points={path} />) : <span /> }
      </svg>
    )
  }
})
