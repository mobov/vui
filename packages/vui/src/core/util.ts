import Buffer from './buffer'
import { BREAKPOINTS, COLORS, ELEVATIONS, ELEVATION } from './constant'
import { isStyleUnit } from '@megmore/es-helper'


/**
 * 验证是否是色板值
 * validate palette prop
 * @param {string | number} val
 * @return {boolean}
 */
export function isPalette (val: string | number): boolean {
  return typeof val === 'number'
    ? false
    : (val.indexOf('-') > 0)
}

/**
 * 验证是否是有效css属性值
 * validate css variable
 * @param {string | number} val
 * @return {boolean}
 */
export function isCSSVar (val: string | number): boolean {
  return typeof val === 'number'
    ? false
    : (val.indexOf('--') === 0)
}

/**
 * 获取真实css属性值
 * get rendered css value
 * @param {string} val
 * @return {string}
 */
export function getCSSVal (val: string): string {
  return isPalette(val) || COLORS.includes(val)
    ? Buffer.docStyles.getPropertyValue(`--m-color-${val}`).trim()
    : isCSSVar(val)
      ? Buffer.docStyles.getPropertyValue(val).trim()
      : val
}

/**
 * 获取真实渲染样式尺寸
 * @param value
 * @return {string}
 */
export function getStyleSize (value: string | number): string {
  return (typeof value !== 'number' && isStyleUnit(value))
    ? value
    : `${value}px`
}
/**
 * 获取有效css color属性值
 * @param {string} val
 * @return {string}
 */
function getStyleColorAttrVal (val: string): string {
  return isPalette(val) || COLORS.includes(val)
    ? `var(--m-color-${val})`
    : isCSSVar(val)
      ? `var(${val})`
      : val
}

/**
 * 获取有效css color属性值
 * @param {string} val
 * @return {string}
 */
function getStyleColor (val: string): string {
  return isPalette(val) || COLORS.includes(val)
    ? `var(--m-color-${val})`
    : isCSSVar(val)
      ? `var(${val})`
      : val
}

/**
 * 获取计算颜色样式值
 * @param {string} compName
 * @param {string} val
 */
export function genColor (compName: string, val: string): string {
  if (val === undefined) {
    return ''
  } else {
    if (COLORS.includes(val)) {
      return `--${compName}-color: var(--m-color-${val})`
    } else {
      return `--${compName}-color: ${val})`
    }
  }
}

/**
 * 获取计算颜色样式值
 * @param {string} compName
 * @param {string} val
 */
export function genFontColor (compName: string, val: string): string {
  if (val === undefined) {
    return ''
  } else {
    if (COLORS.includes(val)) {
      return `--${compName}-font-color: var(--m-color-${val})`
    } else {
      return `--${compName}-font-color: ${val})`
    }
  }
}

/**
 * 计算尺寸样式值
 * @param {string} compName
 * @param {number | string} val
 */
export function genSize (compName: string, val?: number | string): string {
  if (val === undefined) {
    return ''
  } else {
    if (BREAKPOINTS.includes(val)) {
      return `--${compName}-size: var(--${compName}-size-${val})`
    } else if (typeof val === 'number') {
      return `--${compName}-size: ${val}px`
    } else {
      return `--${compName}-size: ${val}`
    }
  }
}

/**
 * 计算阴影
 * @param {string} compName
 * @param {number | string} val
 */
export function genElevation (compName: string, val?: number): string {
  if (val === undefined) {
    return ''
  } else {
    if (ELEVATIONS.includes(val)) {
      return `--${compName}-elevation: ${ELEVATION[val]}`
    } else {
      return `--${compName}-elevation: ${val})`
    }
  }
}

/**
 * 计算hover颜色样式值
 * @param {string} compName
 * @param {string} val
 */
export function genHoverColor ( compName: string, val?: string): string {
  // if (val == undefined) {
  //   return ''
  // } else {
  //   let result = val
  //
  //   if (HoverColor.exist(val)) {
  //     result = HoverColor.getItem(val)
  //   } else {
  //     const realVal = getCSSVal(val)
  //     const colorObj = Color(realVal)
  //
  //     result = colorObj.isDark()
  //       ? colorObj.lighten(0.3)
  //       : colorObj.darken(0.1)
  //     HoverColor.setItem(val, result)
  //   }
  //   return `--${compName}-hover-color: ${val})`
  // }
}


