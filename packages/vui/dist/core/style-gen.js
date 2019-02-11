import Color from 'color';
import { BREAKPOINTS, COLORS } from './constant';
import { isPalette, isCSSVar, getCSSVal } from './util';
import { HoverColor } from './cache';
/**
 * 获取有效css color属性值
 * @param {string} val
 * @return {string}
 */
function getStyleColorAttrVal(val) {
    return isPalette(val) || COLORS.includes(val)
        ? `var(--m-color-${val})`
        : isCSSVar(val)
            ? `var(${val})`
            : val;
}
/**
 * 计算颜色样式值
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {string} val
 */
export function genColor(styles, compName, property, val) {
    if (val !== undefined) {
        styles[`--${compName}-${property}`] = getStyleColorAttrVal(val);
    }
}
/**
 * 计算hover颜色样式值
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {string} val
 */
export function genHover(styles, compName, property, val) {
    if (val !== undefined) {
        let result = val;
        if (HoverColor.exist(val)) {
            result = HoverColor.getItem(val);
        }
        else {
            const realVal = getCSSVal(val);
            const colorObj = Color(realVal);
            result = colorObj.isDark()
                ? colorObj.lighten(0.3)
                : colorObj.darken(0.1);
            HoverColor.setItem(val, result);
        }
        styles[`--${compName}-${property}`] = result;
    }
}
/**
 * 计算尺寸样式值
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {number | string} val
 */
export function genSize(styles, compName, property, val) {
    if (val !== undefined) {
        styles[`--${compName}-${property}`] = typeof val === 'number'
            ? `${val}px`
            : BREAKPOINTS.includes(val)
                ? `var(--${compName}-${property}-${val})`
                : val;
    }
}
/**
 * 计算阴影
 * @param styles
 * @param {string} compName
 * @param {number | string} val
 */
export function genElevation(styles, compName, val) {
}
/**
 *
 * @param styles
 * @param compName
 * @param property
 * @param val
 */
export function genSpace(styles, compName, property, val) {
    if (val !== undefined) {
        styles[`--${compName}-${property}`] = typeof val === 'number'
            ? `${val}px`
            : BREAKPOINTS.includes(val)
                ? `var(--m-space-${val})`
                : val;
    }
}
/***
 * 通用样式
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {number | string} val
 */
export function genStaticStyles(styles, compName, property, val) {
    if (val !== undefined) {
        styles[`--${compName}-${property}`] = val;
    }
}
//# sourceMappingURL=style-gen.js.map