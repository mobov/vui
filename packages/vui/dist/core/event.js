/**
 * 事件绑定
 * @param element
 * @param event
 * @param handler
 * @param propgation
 */
export const on = (() => {
    if (document.addEventListener) {
        return (element, event, handler = () => void (0), propagation = false) => {
            if (element && event && handler) {
                element.addEventListener(event, handler, propagation);
            }
        };
    }
    else {
        return (element, event, handler = () => void (0)) => {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
})();
export const off = (() => {
    if (document.addEventListener) {
        return (element, event, handler = () => void (0), propagation = false) => {
            if (element && event) {
                element.removeEventListener(event, handler, propagation);
            }
        };
    }
    else {
        return (element, event, handler = () => void (0)) => {
            if (element && event) {
                element.detachEvent('on' + event, handler);
            }
        };
    }
})();
export const once = (element, event, handler) => {
    const run = () => {
        handler();
        off(element, event, run, false);
    };
    on(element, event, run, false);
};
//# sourceMappingURL=event.js.map