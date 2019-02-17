class Cache {
    constructor() {
        this.BUFFER = {};
    }
    getItem(key) {
        return this.BUFFER[key];
    }
    setItem(key, val) {
        this.BUFFER[key] = val;
    }
    exist(key) {
        return this.BUFFER.hasOwnProperty(key);
    }
}
export const HoverColor = new Cache();
//# sourceMappingURL=cache.js.map