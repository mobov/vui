import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';
import Checkbox from './checkbox.style';
import MIcon from '../icon';
import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
const _name = 'm-checkbox';
let MCheckbox = class MCheckbox extends Mixins(colorable, sizeable) {
    constructor() {
        super(...arguments);
        this.isArrayValue = false;
        this.isArrayLabel = false;
        this.isBooleanValue = false;
    }
    onInput(val) { }
    get isCheck() {
        const { value, label, isArrayValue, isArrayLabel } = this;
        let isCheck = false;
        if (isArrayValue && isArrayLabel) {
            // Allcheck下value是数组, label也是数组
            if (value.length > 0) {
                isCheck = true;
            }
        }
        else if (isArrayValue) {
            // value是数组, label单值
            if (value.includes(label)) {
                isCheck = true;
            }
        }
        else {
            if (value === label) {
                isCheck = true;
            }
        }
        return isCheck;
    }
    handleClick() {
        const { disabled, isBooleanValue, isArrayValue, isArrayLabel, label, value, onInput, isCheck } = this;
        if (disabled) {
            return;
        }
        if (isArrayValue && isArrayLabel) {
            if (isCheck) {
                onInput([]);
            }
            else {
                onInput(label);
            }
        }
        else if (isArrayValue) {
            const result = [].concat(value);
            if (isCheck) {
                const index = result.findIndex(item => item === label);
                result.splice(index, 1);
                onInput(result);
            }
            else {
                result.push(label);
                onInput(result);
            }
        }
        else if (isBooleanValue) {
            onInput(!value);
        }
        else {
            if (isCheck) {
                onInput(null);
            }
            else {
                onInput(label);
            }
        }
    }
    RCheckbox() {
        const { size, checkedIcon, uncheckIcon, incheckIcon, value, label, isCheck, isArrayValue, isArrayLabel } = this;
        let checkIcon = checkedIcon;
        if (isArrayValue &&
            isArrayLabel &&
            isCheck &&
            (label.length > value.length)) {
            // Allcheck下value是数组, label也是数组
            checkIcon = incheckIcon;
        }
        return (<a staticClass={`${_name}__checkbox`}>
        <transition name='m-transition-scale'>
          {!isCheck ? undefined
            : <MIcon staticClass={`${_name}__checked-icon`} name={checkIcon} size={size}/>}
        </transition>
        <MIcon staticClass={`${_name}__uncheck-icon`} size={size} name={uncheckIcon}/>
        <div v-m-ripple staticClass={`${_name}__checkbox-wrapper`}/>
      </a>);
    }
    render() {
        const { $slots, color, fontColor, size, RCheckbox, handleClick, value, label, disabled, isCheck } = this;
        this.isArrayValue = value instanceof Array;
        this.isArrayLabel = label instanceof Array;
        // boolean模式下等价于switch
        this.isBooleanValue = typeof value === 'boolean';
        return (<Checkbox staticClass={_name} color={color} fontColor={fontColor} size={size} disabled={disabled} checked={isCheck} onClick={() => handleClick()}>
        {RCheckbox()}
        {$slots.default}
      </Checkbox>);
    }
};
tslib_1.__decorate([
    Prop({ type: [Array, Number, String, Boolean], default: false })
], MCheckbox.prototype, "value", void 0);
tslib_1.__decorate([
    Prop({ type: [Array, Number, String, Boolean], default: true })
], MCheckbox.prototype, "label", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'check_box' })
], MCheckbox.prototype, "checkedIcon", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'check_box_outline_blank' })
], MCheckbox.prototype, "uncheckIcon", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'indeterminate_check_box' })
], MCheckbox.prototype, "incheckIcon", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MCheckbox.prototype, "disabled", void 0);
tslib_1.__decorate([
    Emit('input')
], MCheckbox.prototype, "onInput", null);
MCheckbox = tslib_1.__decorate([
    Component({
        components: { Checkbox, MIcon }
    })
], MCheckbox);
export default MCheckbox;
//# sourceMappingURL=checkbox.jsx.map