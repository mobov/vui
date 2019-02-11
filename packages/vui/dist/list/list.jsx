import * as tslib_1 from "tslib";
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { genSize } from '../core/style-gen';
const _name = 'm-list';
let MList = class MList extends Vue {
    constructor() {
        super(...arguments);
        this.disableRipple = false;
    }
    onClick(e) { }
    get styles() {
        const { size } = this;
        const styles = {};
        genSize(styles, _name, 'size', size);
        return styles;
    }
    render() {
        const { styles, $slots, onClick } = this;
        return (<div staticClass={_name} v-m-ripple onClick={onClick} style={styles}>
        {$slots.media ? <div staticClass={`${_name}__media`}>{$slots.media}</div> : undefined}
        <div staticClass={`${_name}__content`}>
          {$slots.default}
        </div>
        {$slots.action ? <div staticClass={`${_name}__action`}>{$slots.action}</div> : undefined}
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MList.prototype, "size", void 0);
tslib_1.__decorate([
    Prop({ type: [String, Number] })
], MList.prototype, "mode", void 0);
tslib_1.__decorate([
    Prop({ type: [String, Number] })
], MList.prototype, "color", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean })
], MList.prototype, "disableRipple", void 0);
tslib_1.__decorate([
    Emit('click')
], MList.prototype, "onClick", null);
MList = tslib_1.__decorate([
    Component
], MList);
export default MList;
//# sourceMappingURL=list.jsx.map