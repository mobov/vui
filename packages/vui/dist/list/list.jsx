import * as tslib_1 from "tslib";
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { genSize } from '../core/util';
const compName = 'm-list';
let MList = class MList extends Vue {
    onClick(e) { }
    get styles() {
        const { size } = this;
        const styles = {};
        genSize(styles, compName, size);
        return styles;
    }
    render() {
        const { styles, $slots, onClick } = this;
        return (<div staticClass={compName} onClick={onClick} style={styles}>
        {$slots.media ? <div staticClass={`${compName}__media`}>{$slots.media}</div> : undefined}
        <div staticClass={`${compName}__content`}>
          {$slots.default}
        </div>
        {$slots.action ? <div staticClass={`${compName}__action`}>{$slots.action}</div> : undefined}
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
    Emit('click')
], MList.prototype, "onClick", null);
MList = tslib_1.__decorate([
    Component
], MList);
export default MList;
//# sourceMappingURL=list.jsx.map