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
 * @param value
 * @return {string}
 */
export declare function getStyleSize(value: string | number): string;
/**
 * 获取计算颜色样式值
 * @param {string} compName
 * @param {string} val
 */
export declare function genColor(compName: string, val: string): string;
/**
 * 获取计算颜色样式值
 * @param {string} compName
 * @param {string} val
 */
export declare function genFontColor(compName: string, val: string): string;
/**
 * 计算尺寸样式值
 * @param {string} compName
 * @param {number | string} val
 */
export declare function genSize(compName: string, val?: number | string): string;
/**
 * 计算阴影
 * @param {string} compName
 * @param {number | string} val
 */
export declare function genElevation(compName: string, val?: number): string;
