import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';
import MIcon from '../icon';
import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import { genColor, genFontColor, genSize } from '../core/util';
const compName = 'm-radio';
let MRadio = class MRadio extends Mixins(colorable, sizeable) {
    onInput(val) { }
    get styles() {
        const { fontColor, size, color } = this;
        const styles = {};
        genFontColor(styles, compName, fontColor);
        genColor(styles, compName, color);
        genSize(styles, compName, size);
        return styles;
    }
    get classes() {
        const { checked, disabled } = this;
        const classes = {
            'm--checked': checked,
            'm--disabled': disabled,
        };
        return classes;
    }
    get checked() {
        return this.label === this.value;
    }
    handleClick(val) {
        if (this.disabled) {
            return;
        }
        if (this.checked) {
            return;
        }
        this.onInput(val);
    }
    RRadio() {
        const { size, checkedIcon, uncheckIcon, checked } = this;
        return (<a staticClass={`${compName}__radio`}>
        <transition name='m--transition-scale'>
          {!checked ? undefined : (<MIcon staticClass={`${compName}__checked-icon`} name={checkedIcon} size={size}/>)}
        </transition>
        <MIcon staticClass={`${compName}__uncheck-icon`} size={size} name={uncheckIcon}/>
        <div v-m-ripple staticClass={`${compName}__radio-wrapper`}/>
      </a>);
    }
    render() {
        const { $slots, styles, classes, label, handleClick, RRadio } = this;
        return (<div staticClass={compName} class={classes} style={styles} onClick={() => handleClick(label)}>
        {RRadio()}
        {$slots.default}
      </div>);
    }
};
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
    Component({
        components: { MIcon }
    })
], MRadio);
export default MRadio;
//# sourceMappingURL=radio.jsx.map