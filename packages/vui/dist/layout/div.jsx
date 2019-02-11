import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FLEX_ALIGN, FLEX_JUSTIFY, FLEX_WRAP } from '../core/constant/constant';
const _name = 'm-div';
let MDiv = class MDiv extends Vue {
    render() {
        return (<div staticClass={_name}/>);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MDiv.prototype, "id", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MDiv.prototype, "inline", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: FLEX_WRAP.normal })
], MDiv.prototype, "wrap", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: FLEX_JUSTIFY.start })
], MDiv.prototype, "justify", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: FLEX_ALIGN.stretch })
], MDiv.prototype, "align", void 0);
MDiv = tslib_1.__decorate([
    Component({
        functional: true
    })
], MDiv);
export default MDiv;
//# sourceMappingURL=div.jsx.map