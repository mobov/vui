import * as tslib_1 from "tslib";
/**
 * 时间选择器底部
 */
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { color, variety } from '../../core/constant';
import MButton from '../../button';
const compName = 'm-time-picker-handler';
let MTimePickerHandler = class MTimePickerHandler extends Vue {
    onConfirm() { }
    onCancel() { }
    render() {
        const { onConfirm, onCancel } = this;
        return (<div staticClass={`${compName} m-p-sm`}>
                <MButton size="sm" style={{ width: '5rem' }} variety={variety.flat} color={color.primary} onClick={onCancel}>cancel</MButton>
                <MButton size="sm" style={{ width: '5rem' }} color={color.primary} onClick={onConfirm}>ok</MButton>
            </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: String, default: color.primary })
], MTimePickerHandler.prototype, "color", void 0);
tslib_1.__decorate([
    Emit('confirm')
], MTimePickerHandler.prototype, "onConfirm", null);
tslib_1.__decorate([
    Emit('cancel')
], MTimePickerHandler.prototype, "onCancel", null);
MTimePickerHandler = tslib_1.__decorate([
    Component({ components: { MButton } })
], MTimePickerHandler);
export default MTimePickerHandler;
//# sourceMappingURL=handler.jsx.map