import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VARIETY } from '../constant';
let variable = class variable extends Vue {
};
tslib_1.__decorate([
    Prop({
        type: String,
        validator(value) {
            return VARIETY.includes(value);
        }
    })
], variable.prototype, "variety", void 0);
variable = tslib_1.__decorate([
    Component
], variable);
export default variable;
//# sourceMappingURL=variable.js.map