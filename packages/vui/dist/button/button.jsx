import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';
import Button from './button.style';
import MIcon from '../icon';
import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
import shapeable from '../core/mixin/shapeable';
const _name = 'm-button';
let MButton = class MButton extends Mixins(colorable, sizeable, elevated, variable, shapeable) {
    onClick(e) { }
    render() {
        const { icon, onClick } = this;
        return (<Button v-m-ripple staticClass={_name} onClick={onClick}>
        {!icon ? undefined
            : <MIcon name={icon}/>}
        {!this.$slots.default ? undefined
            : <div class={`${_name}__main`}>{this.$slots.default}</div>}
      </Button>);
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
    Emit('click')
], MButton.prototype, "onClick", null);
MButton = tslib_1.__decorate([
    Component({
        components: { Button, MIcon }
    })
], MButton);
export default MButton;
//# sourceMappingURL=button.jsx.map