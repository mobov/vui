import * as tslib_1 from "tslib";
import { BREAKPOINTS } from '../core/constant/constant';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { genStaticStyles, genSpace } from '../core/style-gen';
const _name = 'm-col';
let MCol = class MCol extends Vue {
    render(h, { props, data, children }) {
        const staticClass = data.staticClass !== undefined ? data.staticClass : '';
        data.staticClass = ` ${_name} ${staticClass} `;
        data.staticClass = data.staticClass.trim();
        if (!data.staticStyle) {
            data.staticStyle = {};
        }
        if (props.gutter) {
            genSpace(data.staticStyle, _name, 'gutter', props.gutter);
        }
        BREAKPOINTS.forEach((breakpoint) => {
            if (props[breakpoint]) {
                genStaticStyles(data.staticStyle, _name, `span-${breakpoint}`, props[breakpoint]);
            }
        });
        if (props.id) {
            data.domProps = data.domProps || {};
            data.domProps.id = props.id;
        }
        return h(props.tag, data, children);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MCol.prototype, "id", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'div' })
], MCol.prototype, "tag", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MCol.prototype, "xs", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MCol.prototype, "sm", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MCol.prototype, "md", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MCol.prototype, "lg", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MCol.prototype, "xl", void 0);
tslib_1.__decorate([
    Prop({ type: [String, Number] })
], MCol.prototype, "gutter", void 0);
MCol = tslib_1.__decorate([
    Component({
        functional: true
    })
], MCol);
export default MCol;
//# sourceMappingURL=col.jsx.map