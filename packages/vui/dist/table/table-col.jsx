import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Color, Align } from '../core/constant';
export const compName = 'm-table-col';
let MTableCol = class MTableCol extends Vue {
};
tslib_1.__decorate([
    Prop({ type: String, default: 'normal' })
], MTableCol.prototype, "type", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MTableCol.prototype, "title", void 0);
tslib_1.__decorate([
    Prop({ type: [String, Number], default: 'auto' })
], MTableCol.prototype, "width", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MTableCol.prototype, "field", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: Align.center })
], MTableCol.prototype, "align", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: Color.primary })
], MTableCol.prototype, "color", void 0);
tslib_1.__decorate([
    Prop({ type: Function })
], MTableCol.prototype, "sort", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MTableCol.prototype, "sortable", void 0);
MTableCol = tslib_1.__decorate([
    Component
], MTableCol);
export default MTableCol;
//# sourceMappingURL=table-col.jsx.map