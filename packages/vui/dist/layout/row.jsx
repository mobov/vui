import * as tslib_1 from "tslib";
import { Component, Vue, Prop } from 'vue-property-decorator';
import { genStaticStyles, genSize } from '../core/util';
const compName = 'm-row';
let MRow = class MRow extends Vue {
    render(h, { props, data, children }) {
        const staticClass = data.staticClass ? data.staticClass : '';
        data.staticClass = `${compName} ${staticClass}`;
        data.staticStyle = data.staticStyle ? data.staticStyle : {};
        genStaticStyles(data.staticStyle, compName, 'cols', props.cols);
        genSize(data.staticStyle, `${compName}-gutter`, props.gutter);
        console.log(data);
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