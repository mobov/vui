import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from 'vue-property-decorator';
let sizeable = class sizeable extends Vue {
};
tslib_1.__decorate([
    Prop({ type: [String, Number] })
], sizeable.prototype, "size", void 0);
sizeable = tslib_1.__decorate([
    Component
], sizeable);
export default sizeable;
//# sourceMappingURL=sizeable.js.map