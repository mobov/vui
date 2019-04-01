/**
 * 事件绑定
 * @param element
 * @param event
 * @param handler
 * @param propgation
 */
export declare const on: (element: HTMLElement | Window, event: string, handler?: () => any, propagation?: boolean) => void;
export declare const off: (element: HTMLElement | Window, event: string, handler?: () => any, propagation?: boolean) => void;
export declare const once: (element: HTMLElement | Window, event: string, handler: () => void) => void;
