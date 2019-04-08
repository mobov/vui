/**
 * 事件绑定
 * @param element
 * @param event
 * @param handler
 * @param propgation
 */
export declare const on: (element: Window | HTMLElement, event: string, handler?: () => any, propagation?: boolean) => void;
export declare const off: (element: Window | HTMLElement, event: string, handler?: () => any, propagation?: boolean) => void;
export declare const once: (element: Window | HTMLElement, event: string, handler: () => void) => void;
