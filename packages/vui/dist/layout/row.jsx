import * as tslib_1 from "tslib";
import { Component, Vue, Prop } from 'vue-property-decorator';
import { genStaticStyles, genSpace } from '../core/style-gen';
import { FLEX_ALIGN, FLEX_JUSTIFY, FLEX_WRAP } from '../core/constant/constant';
const _name = 'm-row';
let MRow = class MRow extends Vue {
    render(h, { props, data, children }) {
        data.staticClass = data.staticClass !== undefined ? data.staticClass : '';
        data.staticClass += ` ${_name} m-flex-wrap-${props.wrap} m-flex-justify-${props.justify} m-flex-align-${props.align} `;
        data.staticClass = data.staticClass.trim();
        if (!data.staticStyle) {
            data.staticStyle = {};
        }
        if (props.cols) {
            genStaticStyles(data.staticStyle, _name, 'cols', props.cols);
        }
        if (props.gutter) {
            genSpace(data.staticStyle, _name, 'gutter', props.gutter);
        }
        if (props.id) {
            data.domProps = data.domProps || {};
            data.domProps.id = props.id;
        }
        return h(props.tag, data, children);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MRow.prototype, "id", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'div' })
], MRow.prototype, "tag", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: FLEX_WRAP.normal })
], MRow.prototype, "wrap", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: FLEX_JUSTIFY.start })
], MRow.prototype, "justify", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: FLEX_ALIGN.stretch })
], MRow.prototype, "align", void 0);
tslib_1.__decorate([
    Prop({ type: [String, Number] })
], MRow.prototype, "gutter", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MRow.prototype, "cols", void 0);
MRow = tslib_1.__decorate([
    Component({
        functional: true
    })
], MRow);
export default MRow;
//# sourceMappingURL=row.jsx.map