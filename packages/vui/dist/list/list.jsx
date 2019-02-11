import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';
import List from './list.style';
import sizeable from '../core/mixin/sizeable';
const _name = 'm-list';
let MList = class MList extends Mixins(sizeable) {
    onClick(e) { }
    render() {
        const { $slots, onClick, size } = this;
        return (<List staticClass={_name} size={size} onClick={onClick}>
        {$slots.media ? <div staticClass={`${_name}__media`}>{$slots.media}</div> : undefined}
        <div staticClass={`${_name}__content`}>
          {$slots.default}
        </div>
        {$slots.action ? <div staticClass={`${_name}__action`}>{$slots.action}</div> : undefined}
      </List>);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MList.prototype, "mode", void 0);
tslib_1.__decorate([
    Emit('click')
], MList.prototype, "onClick", null);
MList = tslib_1.__decorate([
    Component({
        components: { List }
    })
], MList);
export default MList;
//# sourceMappingURL=list.jsx.map