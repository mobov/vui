import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SHAPE } from '../constant';
let shapeable = class shapeable extends Vue {
};
tslib_1.__decorate([
    Prop({
        type: String,
        validator(value) {
            return SHAPE.includes(value);
        }
    })
], shapeable.prototype, "shape", void 0);
shapeable = tslib_1.__decorate([
    Component
], shapeable);
export default shapeable;
//# sourceMappingURL=shapeable.js.map