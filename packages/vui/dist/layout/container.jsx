import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
const _name = 'm-container';
let MContainer = class MContainer extends Vue {
    render(h, { props, data, children }) {
        const staticClass = data.staticClass !== undefined ? data.staticClass : '';
        data.staticClass = `${_name} ${staticClass}`.trim();
        if (props.id) {
            data.domProps = data.domProps || {};
            data.domProps.id = props.id;
        }
        return h(props.tag, data, children);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MContainer.prototype, "id", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'div' })
], MContainer.prototype, "tag", void 0);
MContainer = tslib_1.__decorate([
    Component({
        functional: true
    })
], MContainer);
export default MContainer;
//# sourceMappingURL=container.jsx.map