import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';
import MIcon from '../icon';
import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
import shapeable from '../core/mixin/shapeable';
import { genColor, genElevation, genFontColor, genSize, genShape, genVariety } from '../core/util';
const compName = 'm-button';
let MButton = class MButton extends Mixins(colorable, sizeable, elevated, variable, shapeable) {
    onClick(e) { }
    get styles() {
        const { fontColor, size, color, elevation } = this;
        const styles = {};
        genFontColor(styles, compName, fontColor);
        genColor(styles, compName, color);
        genElevation(styles, compName, elevation);
        genSize(styles, compName, size);
        return styles;
    }
    get classes() {
        const { shape, variety, block, disabled } = this;
        const classes = {
            'm--block': block,
            'm--disabled': disabled,
        };
        genShape(classes, shape);
        genVariety(classes, variety);
        return classes;
    }
    render() {
        const { icon, onClick } = this;
        return (<div v-m-ripple staticClass={compName} onClick={onClick}>
        {!icon ? undefined
            : <MIcon name={icon}/>}
        {!this.$slots.default ? undefined
            : <div class={`${compName}__main`}>{this.$slots.default}</div>}
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: Boolean })
], MButton.prototype, "block", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MButton.prototype, "icon", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean })
], MButton.prototype, "loading", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean })
], MButton.prototype, "disabled", void 0);
tslib_1.__decorate([
    Emit('click')
], MButton.prototype, "onClick", null);
MButton = tslib_1.__decorate([
    Component({
        components: { MIcon }
    })
], MButton);
export default MButton;
//# sourceMappingURL=button.jsx.map