/**
 * 验证是否是色板值
 * validate palette prop
 * @param {string | number} val
 * @return {boolean}
 */
export declare function isPalette(val: string | number): boolean;
/**
 * 验证是否是有效css属性值
 * validate css variable
 * @param {string | number} val
 * @return {boolean}
 */
export declare function isCSSVar(val: string | number): boolean;
/**
 * 获取真实css属性值
 * get rendered css value
 * @param {string} val
 * @return {string}
 */
export declare function getCSSVal(val: string): string;
/**
 * 获取真实渲染样式尺寸
 * @param val
 * @return {string}
 */
export declare function getStyleSize(val: string | number): string;
/**
 * 获取真实渲染space尺寸
 * @param val
 */
export declare function getStyleSpace(val?: number | string): string;
/**
 * 获取计算颜色样式值
 * @param styles
 * @param compName
 * @param val
 */
export declare function genColor(styles: any, compName: string, val: string | undefined): void;
/**
 * 获取计算颜色样式值
 * @param styles
 * @param compName
 * @param val
 */
export declare function genFontColor(styles: any, compName: string, val: string | undefined): void;
/**
 * 计算尺寸样式值
 * @param styles
 * @param compName
 * @param val
 */
export declare function genSize(styles: any, compName: string, val?: number | string | undefined): void;
/**
 *
 * @param styles
 * @param compName
 * @param val
 */
export declare function genSpace(styles: any, compName: string, val?: number | string): void;
/**
 * 计算阴影
 * @param classes
 * @param val
 */
export declare function genElevation(classes?: any, val?: number | undefined): void;
/**
 * 计算形状
 * @param classes
 * @param val
 */
export declare function genShape(classes: any, val: string | undefined): void;
/**
 * 计算形态
 * @param classes
 * @param val
 */
export declare function genVariety(classes: any, val: string | undefined): void;
/**
 * 计算hover颜色样式值
 * @param {string} compName
 * @param {string} val
 */
export declare function genHoverColor(compName: string, val?: string): void;
/***
 * 通用样式
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {number | string} val
 */
export declare function genStaticStyles(styles: any, compName: string, property: string, val: number | string | undefined): void;
/***
 * 通用样式
 * @param styles
 * @param {string} property
 * @param {number | string} val
 */
export declare function genCommonStyle(styles: any, property: string, val: number | string | undefined): void;
/**
 * slim bar样式滚动条
 */
export declare function getScrollBarStyles(direction?: 'x' | 'y' | 'xy', size?: string, bgColor?: string, color?: string): string;
