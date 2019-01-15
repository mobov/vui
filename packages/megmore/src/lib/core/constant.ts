/**
 * 断点
 * breakpoints constant
 * @type {string[]}
 */
//

export const ELEVATION_MIN = 0

export const ELEVATION_DEFAULT = 2

export const ELEVATION_MAX = 24

export enum STATUS {
  success = 0,
  pending = 1,
  failure = 2
}

export enum BREAKPOINT {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}
// export const BREAKPOINTS = Object.values(BREAKPOINT)
export const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl']

export enum VARIETY {
  normal = 'normal',
  flat = 'flat',
  outline = 'outline'
}

export const SHAPES = ['square', 'corner', 'round', 'circle']

export enum SHAPE {
  circle = 'circle',
  round = 'round',
  corner = 'corner',
  square = 'square'
}

export const COLORS = ['primary', 'error', 'success', 'warning', 'default']

export enum COLOR {
  primary = 'primary',
  error = 'error',
  success = 'success',
  warning = 'warning',
  default = 'default'
}

export enum FILL {
  left = 'left',
  both = 'both',
  right = 'right',
  none = 'none'
}

export enum FLEX_JUSTIFY {
  start = 'start',
  center = 'center',
  end = 'end',
  between = 'between',
  around = 'around',
  evenly = 'evenly',
  none = 'none'
}

export enum FLEX_WRAP {
  normal = 'normal',
  reverse = 'reverse',
  none = 'none'
}

export enum FLEX_ALIGN {
  start = 'start',
  center = 'center',
  end = 'end',
  stretch = 'stretch',
}
