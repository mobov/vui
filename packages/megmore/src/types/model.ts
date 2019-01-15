export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string // 尺寸
export type Color = 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'default' | string //  颜色主题类型
export type Variety = 'normal' | 'flat' | 'outline' //  类型
export type Shape = 'square' | 'corner' | 'round' | 'circle' //  形状
export type Align = 'left' | 'center' | 'right' //  水平轴

export type FlexAlign = 'start' | 'center' | 'stretch' | 'end'
export type FlexWrap = 'normal' | 'reverse' | 'none'
export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

export type Image = URL | Uint8ClampedArray

export type Fill = 'left' | 'both' | 'right' | 'none'
// date
export type DateValueFormat = 'timestamp' | 'Date'
export type DatePickerType = 'datetime' | 'date' | 'year' | 'month' | 'time'
export type DateValueType = 'year' | 'month' | 'week' | 'date' | 'time' | 'hours' | 'minutes'
export type DateTimeValueType = 'time' | 'hours' | 'minutes'
