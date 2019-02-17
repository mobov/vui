/* eslint-disable */
class Buffer {
    constructor() {
        this.docStylesVal = false;
    }
    /**
     * 根文档样式表
     * @return {{}}
     */
    get docStyles() {
        if (!this.docStylesVal) {
            const $dom = document.documentElement;
            this.docStylesVal = getComputedStyle($dom);
        }
        return this.docStylesVal;
    }
}
export default new Buffer();
//# sourceMappingURL=buffer.js.map