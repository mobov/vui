import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
export const _name = 'm-table-col';
let MTableCol = class MTableCol extends Vue {
};
tslib_1.__decorate([
    Prop({ type: String })
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
    Prop({ type: String, default: 'center' })
], MTableCol.prototype, "align", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'primary' })
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