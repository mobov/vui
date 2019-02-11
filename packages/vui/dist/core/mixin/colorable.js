import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
let colorable = class colorable extends Vue {
    constructor() {
        super(...arguments);
        this.fontColor = undefined;
        this.color = undefined;
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], colorable.prototype, "fontColor", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], colorable.prototype, "color", void 0);
colorable = tslib_1.__decorate([
    Component
], colorable);
export default colorable;
//# sourceMappingURL=colorable.js.map