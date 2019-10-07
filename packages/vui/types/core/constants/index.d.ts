import Elevation from './elevation';
import Palette from './palette';
export { Elevation, Palette };
export declare type elevation = 0 | 1 | 2 | 3 | 4 | 5;
export declare const ELEVATION: number[];
export declare enum Status {
    success = 0,
    pending = 1,
    failure = 2
}
export declare type breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare enum Breakpoint {
    xs = 0,
    sm = 576,
    md = 768,
    lg = 992,
    xl = 1200
}
export declare const BREAKPOINT: string[];
export declare enum Space {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export declare type space = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare enum Size {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export declare type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare const SIZE: string[];
export declare enum Variety {
    default = "default",
    flat = "flat",
    outline = "outline"
}
export declare type variety = 'default' | 'flat' | 'outline';
export declare const VARIETY: string[];
export declare enum Shape {
    circle = "circle",
    round = "round",
    corner = "corner",
    square = "square"
}
export declare type shape = 'circle' | 'round' | 'corner' | 'square';
export declare const SHAPE: string[];
export declare enum Color {
    primary = "primary",
    error = "error",
    success = "success",
    warning = "warning",
    default = "default"
}
export declare type color = 'primary' | 'error' | 'success' | 'warning' | 'default';
export declare const COLOR: string[];
export declare enum Mode {
    day = "day",
    night = "night"
}
export declare type mode = 'day' | 'night';
export declare enum Fill {
    left = "left",
    both = "both",
    right = "right",
    none = "none"
}
export declare type fill = 'left' | 'both' | 'right' | 'none';
export declare const FILL: string[];
export declare enum FlexDirection {
    row = "row",
    'row-reverse' = "row-reverse",
    column = "column",
    'column-reverse' = "column-reverse"
}
export declare enum FlexJustify {
    start = "start",
    center = "center",
    end = "end",
    between = "between",
    around = "around",
    evenly = "evenly",
    none = "none"
}
export declare type flexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'none';
export declare const FLEX_JUSTIFY: string[];
export declare enum FlexWrap {
    normal = "normal",
    reverse = "reverse",
    none = "none"
}
export declare type flexWrap = 'wrap' | 'reverse' | 'none';
export declare const FLEX_WRAP: string[];
export declare enum FlexAlign {
    start = "start",
    center = "center",
    end = "end",
    stretch = "stretch"
}
export declare type flexAlign = 'start' | 'center' | 'end' | 'stretch';
export declare const FLEX_ALIGN: string[];
export declare enum Align {
    left = "left",
    center = "center",
    right = "right"
}
export declare type align = 'left' | 'center' | 'right';
export declare const ALIGN: string[];
export declare enum DateValueFormat {
    timestamp = "timestamp",
    Date = "Date"
}
export declare type dateValueFormat = 'timestamp' | 'Date';
export declare enum DatePickerType {
    datetime = "datetime",
    date = "date",
    year = "year",
    month = "month",
    time = "time"
}
export declare type datePickerType = 'datetime' | 'date' | 'year' | 'month' | 'time';
export declare enum DateValueType {
    year = "year",
    month = "month",
    week = "week",
    date = "date",
    time = "time",
    hours = "hours",
    minutes = "minutes"
}
export declare type dateValueType = 'year' | 'month' | 'week' | 'date' | 'time' | 'hours' | 'minutes';
export declare enum DateTimeValueType {
    time = "time",
    hours = "hours",
    minutes = "minutes"
}
export declare type dateTimeValueType = 'time' | 'hours' | 'minutes';
export declare type transitionName = 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down' | 'expansion';
export declare enum TransitionName {
    none = "none",
    slideLeft = "slide-left",
    slideRight = "slide-right",
    slideUp = "slide-up",
    slideDown = "slide-down",
    expansion = "expansion"
}
