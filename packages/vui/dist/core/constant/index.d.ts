import ELEVATION from './elevation';
import PALETTE from './palette';
export { ELEVATION, PALETTE };
export declare const ELEVATIONS: number[];
export declare enum STATUS {
    success = 0,
    pending = 1,
    failure = 2
}
export declare type breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare enum BREAKPOINT {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export declare const BREAKPOINTS: any[];
export declare type variety = 'normal' | 'flat' | 'outline';
export declare enum VARIETY {
    normal = "normal",
    flat = "flat",
    outline = "outline"
}
export declare type shape = 'square' | 'corner' | 'round' | 'circle';
export declare enum SHAPE {
    circle = "circle",
    round = "round",
    corner = "corner",
    square = "square"
}
export declare const SHAPES: any[];
export declare type color = 'primary' | 'error' | 'success' | 'warning' | 'default';
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
export declare type fill = 'left' | 'both' | 'right' | 'none';
export declare enum FILL {
    left = "left",
    both = "both",
    right = "right",
    none = "none"
}
export declare type flexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'none';
export declare enum FLEX_JUSTIFY {
    start = "start",
    center = "center",
    end = "end",
    between = "between",
    around = "around",
    evenly = "evenly",
    none = "none"
}
export declare type flexWrap = 'normal' | 'reverse' | 'none';
export declare enum FLEX_WRAP {
    normal = "normal",
    reverse = "reverse",
    none = "none"
}
export declare type flexAlign = 'start' | 'center' | 'end' | 'stretch';
export declare enum FLEX_ALIGN {
    start = "start",
    center = "center",
    end = "end",
    stretch = "stretch"
}
