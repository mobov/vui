import Buffer from './buffer';
import { BREAKPOINTS, COLORS, ELEVATIONS, ELEVATION } from './constant';
import { isStyleUnit } from '@megmore/es-helper';
/**
 * 验证是否是色板值
 * validate palette prop
 * @param {string | number} val
 * @return {boolean}
 */
export function isPalette(val) {
    return typeof val === 'number'
        ? false
        : (val.indexOf('-') > 0);
}
/**
 * 验证是否是有效css属性值
 * validate css variable
 * @param {string | number} val
 * @return {boolean}
 */
export function isCSSVar(val) {
    return typeof val === 'number'
        ? false
        : (val.indexOf('--') === 0);
}
/**
 * 获取真实css属性值
 * get rendered css value
 * @param {string} val
 * @return {string}
 */
export function getCSSVal(val) {
    return isPalette(val) || COLORS.includes(val)
        ? Buffer.docStyles.getPropertyValue(`--m-color-${val}`).trim()
        : isCSSVar(val)
            ? Buffer.docStyles.getPropertyValue(val).trim()
            : val;
}
/**
 * 获取真实渲染样式尺寸
 * @param value
 * @return {string}
 */
export function getStyleSize(value) {
    return (typeof value !== 'number' && isStyleUnit(value))
        ? value
        : `${value}px`;
}
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
 * 获取有效css color属性值
 * @param {string} val
 * @return {string}
 */
function getStyleColor(val) {
    return isPalette(val) || COLORS.includes(val)
        ? `var(--m-color-${val})`
        : isCSSVar(val)
            ? `var(${val})`
            : val;
}
/**
 * 获取计算颜色样式值
 * @param {string} compName
 * @param {string} val
 */
export function genColor(compName, val) {
    if (val === undefined) {
        return '';
    }
    else {
        if (COLORS.includes(val)) {
            return `--${compName}-color: var(--m-color-${val})`;
        }
        else {
            return `--${compName}-color: ${val})`;
        }
    }
}
/**
 * 获取计算颜色样式值
 * @param {string} compName
 * @param {string} val
 */
export function genFontColor(compName, val) {
    if (val === undefined) {
        return '';
    }
    else {
        if (COLORS.includes(val)) {
            return `--${compName}-font-color: var(--m-color-${val})`;
        }
        else {
            return `--${compName}-font-color: ${val})`;
        }
    }
}
/**
 * 计算尺寸样式值
 * @param {string} compName
 * @param {number | string} val
 */
export function genSize(compName, val) {
    if (val === undefined) {
        return '';
    }
    else {
        if (BREAKPOINTS.includes(val)) {
            return `--${compName}-size: var(--${compName}-size-${val})`;
        }
        else if (typeof val === 'number') {
            return `--${compName}-size: ${val}px`;
        }
        else {
            return `--${compName}-size: ${val}`;
        }
    }
}
/**
 * 计算阴影
 * @param {string} compName
 * @param {number | string} val
 */
export function genElevation(compName, val) {
    if (val === undefined) {
        return '';
    }
    else {
        if (ELEVATIONS.includes(val)) {
            return `--${compName}-elevation: ${ELEVATION[val]}`;
        }
        else {
            return `--${compName}-elevation: ${val})`;
        }
    }
}
//# sourceMappingURL=util.js.map