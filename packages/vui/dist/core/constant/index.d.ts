import ELEVATION from './elevation';
import PALETTE from './palette';
export { ELEVATION, PALETTE };
export declare const ELEVATIONS: number[];
export declare type elevation = number;
export declare enum Status {
    success = 0,
    pending = 1,
    failure = 2
}
export declare type breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare enum BREAKPOINT {
    xs = 0,
    sm = 576,
    md = 768,
    lg = 992,
    xl = 1200
}
export declare const BREAKPOINTS: any[];
export declare type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | number;
export declare enum SIZE {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export declare const SIZES: any[];
export declare const COLS = 24;
export declare enum variety {
    normal = "normal",
    flat = "flat",
    outline = "outline"
}
export declare enum VARIETY {
    normal = "normal",
    flat = "flat",
    outline = "outline"
}
export declare const VARIETYS: any[];
export declare enum shape {
    circle = "circle",
    round = "round",
    corner = "corner",
    square = "square"
}
export declare enum SHAPE {
    circle = "circle",
    round = "round",
    corner = "corner",
    square = "square"
}
export declare const SHAPES: any[];
export declare enum color {
    primary = "primary",
    error = "error",
    success = "success",
    warning = "warning",
    default = "default"
}
export declare enum COLOR {
    primary = "primary",
    error = "error",
    success = "success",
    warning = "warning",
    default = "default"
}
export declare const COLORS: any[];
export declare type mode = 'day' | 'night';
export declare enum MODE {
    day = "day",
    night = "night"
}
export declare const MODES: any[];
export declare enum Fill {
    left = "left",
    both = "both",
    right = "right",
    none = "none"
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
export declare enum FLEX_JUSTIFY {
    start = "start",
    center = "center",
    end = "end",
    between = "between",
    around = "around",
    evenly = "evenly",
    none = "none"
}
export declare enum FlexWrap {
    normal = "normal",
    reverse = "reverse",
    none = "none"
}
export declare enum FLEX_WRAP {
    normal = "normal",
    reverse = "reverse",
    none = "none"
}
export declare enum FlexAlign {
    start = "start",
    center = "center",
    end = "end",
    stretch = "stretch"
}
export declare enum FLEX_ALIGN {
    start = "start",
    center = "center",
    end = "end",
    stretch = "stretch"
}
export declare enum align {
    left = "left",
    center = "center",
    right = "right"
}
