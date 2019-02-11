/**
 * 计算颜色样式值
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {string} val
 */
export declare function genColor(styles: any, compName: string, property: string, val?: string): void;
/**
 * 计算hover颜色样式值
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {string} val
 */
export declare function genHover(styles: any, compName: string, property: string, val?: string): void;
/**
 * 计算尺寸样式值
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {number | string} val
 */
export declare function genSize(styles: any, compName: string, property: string, val?: number | string): void;
/**
 * 计算阴影
 * @param styles
 * @param {string} compName
 * @param {number | string} val
 */
export declare function genElevation(styles: any, compName: string, val?: number): void;
/**
 * 计算基于space的margin padding
 * @param styles
 * @param {string} compName
 * @param {number | string} val
 */
export declare function genSpace(styles: any, compName: string, property: string, val?: number | string): void;
/***
 * 通用样式
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {number | string} val
 */
export declare function genStaticStyles(styles: any, compName: string, property: string, val: number | string): void;
