import Elevation from './elevation'
import Palette from './palette'

export {
  Elevation,
  Palette
}

export type elevation = 0 | 1 | 2 | 3 | 4 | 5

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

export enum Space {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export type space = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

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

export type placement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'

export enum Placement {
  top = 'top',
  topStart = 'top-start',
  topEnd = 'top-end',
  bottom = 'bottom',
  bottomStart = 'bottom-start',
  bottomEnd = 'bottom-end',
  left = 'left',
  leftStart = 'left-start',
  leftEnd = 'left-end',
  right = 'left',
  rightStart = 'left-start',
  rightEnd = 'left-end'
}

export const PLACEMENT = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']

export enum FlexDirection {
  row = 'row',
  'row-reverse' = 'row-reverse',
  column = 'column',
  'column-reverse' = 'column-reverse'
}

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

export enum DateValueFormat {
  timestamp = 'timestamp',
  Date = 'Date'
}

export type dateValueFormat = 'timestamp' | 'Date'

export enum DatePickerType {
  datetime = 'datetime',
  date = 'date',
  year = 'year',
  month = 'month',
  time = 'time'
}

export type datePickerType = 'datetime' | 'date' | 'year' | 'month' | 'time'

export enum DateValueType {
  year = 'year',
  month = 'month',
  week = 'week',
  date = 'date',
  time = 'time',
  hours = 'hours',
  minutes = 'minutes'
}

export type dateValueType = 'year' | 'month' | 'week' | 'date' | 'time' | 'hours' | 'minutes'

export enum DateTimeValueType {
  time = 'time',
  hours = 'hours',
  minutes = 'minutes'
}

export type dateTimeValueType = 'time' | 'hours' | 'minutes'

export type transitionName = 'slide-left' | 'slide-right' | 'slide-up'| 'slide-down' | 'expansion'

export enum TransitionName {
  none = 'none',
  slideLeft = 'slide-left',
  slideRight = 'slide-right',
  slideUp = 'slide-up',
  slideDown = 'slide-down',
  expansion = 'expansion',
  scale = 'scale',
  fade = 'fade'
}

