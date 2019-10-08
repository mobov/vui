import Buffer from './buffer'
import { SIZE, COLOR, ELEVATION, BREAKPOINT, SHAPE, VARIETY } from './constants'
import isStyleUnit from '@mobov/es-helper/isStyleUnit'

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

export function isSize (value): boolean {
  return typeof value === 'number' || isStyleUnit(value)
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
  return isPalette(val) || COLOR.includes(val)
    ? Buffer.docStyles.getPropertyValue(`--m-color-${val}`).trim()
    : isCSSVar(val)
      ? Buffer.docStyles.getPropertyValue(val).trim()
      : val
}

/**
 * 获取真实渲染样式尺寸
 * @param val
 * @return {string}
 */
export function getStyleSize (val: string | number): string {
  return (typeof val === 'number')
    ? `${val}px`
    : val
}

/**
 * 获取真实渲染space尺寸
 * @param val
 */
export function getStyleSpace (val?: number | string): string {
  if (val !== undefined) {
    if (typeof val === 'number') {
      return `${val}px`
    } else if (BREAKPOINT.includes(val)) {
      return `var(--m-space-${val})`
    } else {
      return `${val}`
    }
  } else {
    return ''
  }
}

/**
 * 获取有效css color属性值
 * @param {string} val
 * @return {string}
 */
function getStyleColorAttrVal (val: string): string {
  return isPalette(val) || COLOR.includes(val)
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
  return isPalette(val) || COLOR.includes(val)
    ? `var(--m-color-${val})`
    : isCSSVar(val)
      ? `var(${val})`
      : val
}

/**
 * 获取计算颜色样式值
 * @param styles
 * @param compName
 * @param val
 */
export function genColor (styles: any = {}, compName: string, val: string | undefined): void {
  if (val !== undefined) {
    if (COLOR.includes(val)) {
      styles[`--${compName}-color`] = `var(--m-color-${val})`
    } else {
      styles[`--${compName}-color`] = `${val}`
    }
  }
}

/**
 * 获取计算颜色样式值
 * @param styles
 * @param compName
 * @param val
 */
export function genFontColor (styles: any = {}, compName: string, val: string | undefined): void {
  if (val !== undefined) {
    if (COLOR.includes(val)) {
      styles[`--${compName}-font-color`] = `var(--m-color-${val})`
    } else {
      styles[`--${compName}-font-color`] = `${val}`
    }
  }
}

/**
 * 计算尺寸样式值
 * @param styles
 * @param compName
 * @param val
 */
export function genSize (styles: any = {}, compName: string, val?: number | string | undefined): void {
  if (val !== undefined) {
    if (typeof val === 'number') {
      styles[`--${compName}-size`] = `${val}px`
    } else if (isCSSVar(val)) {
      styles[`--${compName}-size`] = `var(${val})`
    } else if (isSize(val)) {
      styles[`--${compName}-size`] = `${val}`
    }
  }
}

/**
 *
 * @param styles
 * @param compName
 * @param val
 */
export function genSpace (styles: any, compName: string, val?: number | string): void {
  if (val !== undefined) {
    if (typeof val === 'number') {
      styles[`--${compName}-space`] = `${val}px`
    } else if (BREAKPOINT.includes(val)) {
      styles[`--${compName}-space`] = `var(--m-space-${val})`
    } else {
      styles[`--${compName}-space`] = `${val}`
    }
  }
}

/**
 * 计算阴影
 * @param classes
 * @param val
 */
export function genElevation (classes: any = {}, val?: number | undefined): void {
  if (val !== undefined) {
    if (ELEVATION.includes(val)) {
      classes[`m-elevation-${val}`] = true
    }
  }
}

/**
 * 计算形状
 * @param classes
 * @param val
 */
export function genShape (classes: any = {}, val: string | undefined): void {
  if (val !== undefined) {
    if (SHAPE.includes(val)) {
      classes[`m-shape-${val}`] = true
    }
  }
}
/**
 * 计算形态
 * @param classes
 * @param val
 */
export function genVariety (classes: any = {}, val: string | undefined): void {
  if (val !== undefined) {
    if (VARIETY.includes(val)) {
      classes[`m-variety-${val}`] = true
    }
  }
}

/**
 * 计算hover颜色样式值
 * @param {string} compName
 * @param {string} val
 */
export function genHoverColor ( compName: string, val?: string): void {
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


/***
 * 通用样式
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {number | string} val
 */
export function genStaticStyles (styles: any, compName: string, property: string, val: number | string | undefined): void {
  if (val !== undefined) {
    styles[`--${compName}-${property}`] = val
  }
}

/***
 * 通用样式
 * @param styles
 * @param {string} property
 * @param {number | string} val
 */
export function genCommonStyle (styles: any, property: string, val: number | string | undefined): void {
  if (val !== undefined) {
    styles[property] = val
  }
}

/**
 * slim bar样式滚动条
 */

export function getScrollBarStyles (
  direction: 'x' | 'y' | 'xy' = 'y',
  size: string = '7px',
  bgColor:string = '#a6a6a6',
  color:string = '#e5e5e5'
) {
  return `
    &::-webkit-scrollbar-thumb {
      background-color: ${bgColor};
    }
    &::-webkit-scrollbar-track {
      background-color: ${color};
    }
    ${
      direction == 'y' ? `
        &::-webkit-scrollbar {
          width: ${size};
        }
        &::-webkit-scrollbar-thumb {
          border-left: 2px solid transparent;
        }
        &::-webkit-scrollbar-track {
          border-left: 2px solid transparent;
        }
      ` : direction == 'x' ? `
        &::-webkit-scrollbar {
          height: ${size};
        }
        &::-webkit-scrollbar-thumb {
          border-top: 2px solid transparent;
        }
        &::-webkit-scrollbar-track {
          border-top: 2px solid transparent;
        }
      ` : `
        &::-webkit-scrollbar {
          width: ${size};
          height: ${size};
        }
        &::-webkit-scrollbar-thumb {
          border-left: 2px solid transparent;
          border-top: 2px solid transparent;
        }
        &::-webkit-scrollbar-track {
          border-left: 2px solid transparent;
          border-top: 2px solid transparent;
        }
      `
    } 
  `
}
