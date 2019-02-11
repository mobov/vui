import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
import { injectGlobal } from 'vue-styled-components';
import breakpoint from 'styled-components-breakpoint';
import { genStaticStyles, genSpace } from '../core/util';
import { BREAKPOINTS } from '../core/constant';
injectGlobal `
  .m-col {
      --m-col-span-xs: var(--m-row-cols);
      --m-col-span-sm: var(--m-col-span-xs);
      --m-col-span-md: var(--m-col-span-sm);
      --m-col-span-lg: var(--m-col-span-md);
      --m-col-span-xl: var(--m-col-span-lg);
      --m-col-gutter: 0;
      
      display: flex;
      box-sizing: border-box;
      padding: var(--m-col-gutter);
      ${BREAKPOINTS.forEach(point => {
    breakpoint(point) `
            width: calc((var(--m-col-span-${point}) / var(--m-row-cols)) * 100%);
          `;
})}
  }
`;
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