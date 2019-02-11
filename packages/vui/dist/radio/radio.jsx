import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import MIcon from '../icon';
import { BREAKPOINT, COLOR } from '../core/constant';
const _name = 'm-radio';
let MRadio = class MRadio extends Vue {
    onInput(val) { }
    get isCheck() {
        return this.label === this.value;
    }
    handleClick(val) {
        if (this.disabled) {
            return;
        }
        if (this.isCheck) {
            return;
        }
        this.onInput(val);
    }
    RRadio() {
        const { size, checkedIcon, uncheckIcon, isCheck } = this;
        return (<a staticClass={`${_name}__radio`}>
        <transition name='m--transition-scale'>
          {!isCheck ? undefined : (<m-icon staticClass={`${_name}__checked-icon`} name={checkedIcon} size={size}/>)}
        </transition>
        <MIcon class={`${_name}__uncheck-icon`} size={size} name={uncheckIcon}/>
        <div v-m-ripple staticClass={`${_name}__radio-wrapper`}/>
      </a>);
    }
    render() {
        const { $slots, label, handleClick, RRadio } = this;
        return (<div staticClass={_name} onClick={() => handleClick(label)}>
        {RRadio()}
        {$slots.default}
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: String, default: BREAKPOINT.md })
], MRadio.prototype, "size", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MRadio.prototype, "fontColor", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: COLOR.primary })
], MRadio.prototype, "color", void 0);
tslib_1.__decorate([
    Prop({ type: [Boolean, Number, String], default: false })
], MRadio.prototype, "value", void 0);
tslib_1.__decorate([
    Prop({ type: [Boolean, Number, String], default: true })
], MRadio.prototype, "label", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'radio_button_checked' })
], MRadio.prototype, "checkedIcon", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'radio_button_unchecked' })
], MRadio.prototype, "uncheckIcon", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MRadio.prototype, "disabled", void 0);
tslib_1.__decorate([
    Emit('input')
], MRadio.prototype, "onInput", null);
MRadio = tslib_1.__decorate([
    Component({ components: { MIcon } })
], MRadio);
export default MRadio;
//# sourceMappingURL=radio.jsx.map