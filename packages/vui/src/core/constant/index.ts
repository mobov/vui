import Elevation from './elevation'
import Palette from './palette'

export {
  Elevation,
  Palette
}

export type elevation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
                       11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 |  23 | 24

export const ELEVATION = Elevation.map((item, index) => index)

export enum Status {
  success = 0,
  pending = 1,
  failure = 2
}

export type breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export enum Breakpoint {
  xs = 0,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200
}

export const BREAKPOINT = ['xs', 'sm', 'md', 'lg', 'xl']

export enum Size {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const SIZE = Object.keys(Size)

export enum Variety {
  default = 'default',
  flat = 'flat',
  outline = 'outline'
}

export type variety = 'default' | 'flat' | 'outline'

export const VARIETY = Object.keys(Variety)

export enum Shape {
  circle = 'circle',
  round = 'round',
  corner = 'corner',
  square = 'square'
}

export type shape = 'circle' | 'round' | 'corner' | 'square'

export const SHAPE = Object.keys(Shape)

export enum Color {
  primary = 'primary',
  error = 'error',
  success = 'success',
  warning = 'warning',
  default = 'default'
}

export type color = 'primary' | 'error' | 'success' | 'warning' | 'default'

export const COLOR = Object.keys(Color)

export enum Mode {
  day = 'day',
  night = 'night'
}

export type mode = 'day' | 'night'

export enum Fill {
  left = 'left',
  both = 'both',
  right = 'right',
  none = 'none'
}

export type fill = 'left' | 'both' | 'right' | 'none'

export const FILL = Object.keys(Fill)

export enum FlexJustify {
  start = 'start',
  center = 'center',
  end = 'end',
  between = 'between',
  around = 'around',
  evenly = 'evenly',
  none = 'none'
}

export type flexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'none'

export const FLEX_JUSTIFY = Object.keys(FlexJustify)

export enum FlexWrap {
  normal = 'normal',
  reverse = 'reverse',
  none = 'none'
}

export type flexWrap = 'wrap' | 'reverse' | 'none'

export const FLEX_WRAP = Object.keys(FlexWrap)

export enum FlexAlign {
  start = 'start',
  center = 'center',
  end = 'end',
  stretch = 'stretch',
}

export type flexAlign = 'start' | 'center' | 'end' | 'stretch'

export const FLEX_ALIGN = Object.keys(FlexAlign)

export enum Align {
  left = 'left',
  center = 'center',
  right = 'right'
}

export type align = 'left' | 'center' | 'right' //  水平轴

export const ALIGN = Object.keys(Align)
