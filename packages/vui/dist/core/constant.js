import ELEVATION_MAP from './style/elevation';
export const ELEVATIONS = ELEVATION_MAP.map((item, index) => index);
export var STATUS;
(function (STATUS) {
    STATUS[STATUS["success"] = 0] = "success";
    STATUS[STATUS["pending"] = 1] = "pending";
    STATUS[STATUS["failure"] = 2] = "failure";
})(STATUS || (STATUS = {}));
export var BREAKPOINT;
(function (BREAKPOINT) {
    BREAKPOINT["xs"] = "xs";
    BREAKPOINT["sm"] = "sm";
    BREAKPOINT["md"] = "md";
    BREAKPOINT["lg"] = "lg";
    BREAKPOINT["xl"] = "xl";
})(BREAKPOINT || (BREAKPOINT = {}));
// export const BREAKPOINTS = Object.values(BREAKPOINT)
export const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];
export var VARIETY;
(function (VARIETY) {
    VARIETY["normal"] = "normal";
    VARIETY["flat"] = "flat";
    VARIETY["outline"] = "outline";
})(VARIETY || (VARIETY = {}));
export const SHAPES = ['square', 'corner', 'round', 'circle'];
export var SHAPE;
(function (SHAPE) {
    SHAPE["circle"] = "circle";
    SHAPE["round"] = "round";
    SHAPE["corner"] = "corner";
    SHAPE["square"] = "square";
})(SHAPE || (SHAPE = {}));
export const COLORS = ['primary', 'error', 'success', 'warning', 'default'];
export var COLOR;
(function (COLOR) {
    COLOR["primary"] = "primary";
    COLOR["error"] = "error";
    COLOR["success"] = "success";
    COLOR["warning"] = "warning";
    COLOR["default"] = "default";
})(COLOR || (COLOR = {}));
export var FILL;
(function (FILL) {
    FILL["left"] = "left";
    FILL["both"] = "both";
    FILL["right"] = "right";
    FILL["none"] = "none";
})(FILL || (FILL = {}));
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
export var FLEX_WRAP;
(function (FLEX_WRAP) {
    FLEX_WRAP["normal"] = "normal";
    FLEX_WRAP["reverse"] = "reverse";
    FLEX_WRAP["none"] = "none";
})(FLEX_WRAP || (FLEX_WRAP = {}));
export var FLEX_ALIGN;
(function (FLEX_ALIGN) {
    FLEX_ALIGN["start"] = "start";
    FLEX_ALIGN["center"] = "center";
    FLEX_ALIGN["end"] = "end";
    FLEX_ALIGN["stretch"] = "stretch";
})(FLEX_ALIGN || (FLEX_ALIGN = {}));
//# sourceMappingURL=constant.js.map