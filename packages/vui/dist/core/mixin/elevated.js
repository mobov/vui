import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ELEVATION } from '../constant';
let elevated = class elevated extends Vue {
};
tslib_1.__decorate([
    Prop({
        type: Number,
        validator(value) {
            return ELEVATION.includes(value);
        }
    })
], elevated.prototype, "elevation", void 0);
elevated = tslib_1.__decorate([
    Component
], elevated);
export default elevated;
//# sourceMappingURL=elevated.js.map