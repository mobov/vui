import * as tslib_1 from "tslib";
import { Component, Vue, Prop } from 'vue-property-decorator';
import { genStaticStyles } from '../core/util';
import { FlexAlign, FlexJustify, FlexWrap } from '../core/constant';
const compName = 'm-flex';
let MRow = class MRow extends Vue {
    render(h, { props, data, children }) {
        const staticClass = data.staticClass ? data.staticClass : '';
        data.staticClass = `${compName} m--wrap-${props.wrap} m--justify-${props.justify} m--align-${props.align} ${staticClass} `;
        data.staticClass += props.inline ? 'm--inline' : '';
        data.staticClass = data.staticClass.trim();
        data.staticStyle = data.staticStyle ? data.staticStyle : {};
        genStaticStyles(data.staticStyle, compName, 'cols', props.cols);
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
    Prop({ type: String, default: false })
], MRow.prototype, "inline", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: FlexWrap.normal })
], MRow.prototype, "wrap", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: FlexJustify.start })
], MRow.prototype, "justify", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: FlexAlign.stretch })
], MRow.prototype, "align", void 0);
MRow = tslib_1.__decorate([
    Component({
        functional: true
    })
], MRow);
export default MRow;
//# sourceMappingURL=flex.jsx.map
