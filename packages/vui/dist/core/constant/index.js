import ELEVATION from './elevation';
import PALETTE from './palette';
export { ELEVATION, PALETTE };
export const ELEVATIONS = ELEVATION.map((item, index) => index);
export var Status;
(function (Status) {
    Status[Status["success"] = 0] = "success";
    Status[Status["pending"] = 1] = "pending";
    Status[Status["failure"] = 2] = "failure";
})(Status || (Status = {}));
export var BREAKPOINT;
(function (BREAKPOINT) {
    BREAKPOINT[BREAKPOINT["xs"] = 0] = "xs";
    BREAKPOINT[BREAKPOINT["sm"] = 576] = "sm";
    BREAKPOINT[BREAKPOINT["md"] = 768] = "md";
    BREAKPOINT[BREAKPOINT["lg"] = 992] = "lg";
    BREAKPOINT[BREAKPOINT["xl"] = 1200] = "xl";
})(BREAKPOINT || (BREAKPOINT = {}));
export const BREAKPOINTS = Object.values(BREAKPOINT);
export var SIZE;
(function (SIZE) {
    SIZE["xs"] = "xs";
    SIZE["sm"] = "sm";
    SIZE["md"] = "md";
    SIZE["lg"] = "lg";
    SIZE["xl"] = "xl";
})(SIZE || (SIZE = {}));
export const SIZES = Object.values(SIZE);
export const COLS = 24;
export var variety;
(function (variety) {
    variety["normal"] = "normal";
    variety["flat"] = "flat";
    variety["outline"] = "outline";
})(variety || (variety = {}));
export var VARIETY;
(function (VARIETY) {
    VARIETY["normal"] = "normal";
    VARIETY["flat"] = "flat";
    VARIETY["outline"] = "outline";
})(VARIETY || (VARIETY = {}));
export const VARIETYS = Object.values(VARIETY);
export var shape;
(function (shape) {
    shape["circle"] = "circle";
    shape["round"] = "round";
    shape["corner"] = "corner";
    shape["square"] = "square";
})(shape || (shape = {}));
export var SHAPE;
(function (SHAPE) {
    SHAPE["circle"] = "circle";
    SHAPE["round"] = "round";
    SHAPE["corner"] = "corner";
    SHAPE["square"] = "square";
})(SHAPE || (SHAPE = {}));
export const SHAPES = Object.values(SHAPE);
export var color;
(function (color) {
    color["primary"] = "primary";
    color["error"] = "error";
    color["success"] = "success";
    color["warning"] = "warning";
    color["default"] = "default";
})(color || (color = {}));
export var COLOR;
(function (COLOR) {
    COLOR["primary"] = "primary";
    COLOR["error"] = "error";
    COLOR["success"] = "success";
    COLOR["warning"] = "warning";
    COLOR["default"] = "default";
})(COLOR || (COLOR = {}));
export const COLORS = Object.values(COLOR);
export var MODE;
(function (MODE) {
    MODE["day"] = "day";
    MODE["night"] = "night";
})(MODE || (MODE = {}));
export const MODES = Object.values(MODE);
export var Fill;
(function (Fill) {
    Fill["left"] = "left";
    Fill["both"] = "both";
    Fill["right"] = "right";
    Fill["none"] = "none";
})(Fill || (Fill = {}));
export var FlexJustify;
(function (FlexJustify) {
    FlexJustify["start"] = "start";
    FlexJustify["center"] = "center";
    FlexJustify["end"] = "end";
    FlexJustify["between"] = "between";
    FlexJustify["around"] = "around";
    FlexJustify["evenly"] = "evenly";
    FlexJustify["none"] = "none";
})(FlexJustify || (FlexJustify = {}));
export var FLEX_JUSTIFY;
(function (FLEX_JUSTIFY) {
    FLEX_JUSTIFY["start"] = "start";
    FLEX_JUSTIFY["center"] = "center";
    FLEX_JUSTIFY["end"] = "end";
    FLEX_JUSTIFY["between"] = "between";
    FLEX_JUSTIFY["around"] = "around";
    FLEX_JUSTIFY["evenly"] = "evenly";
    FLEX_JUSTIFY["none"] = "none";
})(FLEX_JUSTIFY || (FLEX_JUSTIFY = {}));
export var FlexWrap;
(function (FlexWrap) {
    FlexWrap["normal"] = "normal";
    FlexWrap["reverse"] = "reverse";
    FlexWrap["none"] = "none";
})(FlexWrap || (FlexWrap = {}));
export var FLEX_WRAP;
(function (FLEX_WRAP) {
    FLEX_WRAP["normal"] = "normal";
    FLEX_WRAP["reverse"] = "reverse";
    FLEX_WRAP["none"] = "none";
})(FLEX_WRAP || (FLEX_WRAP = {}));
export var FlexAlign;
(function (FlexAlign) {
    FlexAlign["start"] = "start";
    FlexAlign["center"] = "center";
    FlexAlign["end"] = "end";
    FlexAlign["stretch"] = "stretch";
})(FlexAlign || (FlexAlign = {}));
export var FLEX_ALIGN;
(function (FLEX_ALIGN) {
    FLEX_ALIGN["start"] = "start";
    FLEX_ALIGN["center"] = "center";
    FLEX_ALIGN["end"] = "end";
    FLEX_ALIGN["stretch"] = "stretch";
})(FLEX_ALIGN || (FLEX_ALIGN = {}));
export var align;
(function (align) {
    align["left"] = "left";
    align["center"] = "center";
    align["right"] = "right";
})(align || (align = {}));
//
// export type align = 'left' | 'center' | 'right' //  水平轴
//# sourceMappingURL=index.js.map
