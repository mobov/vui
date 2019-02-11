import * as tslib_1 from "tslib";
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import Avatar from './avatar.style';
import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
import shapeable from '../core/mixin/shapeable';
import { STATUS } from '../core/constant';
const _name = 'm-avatar';
let MAvatar = class MAvatar extends Mixins(colorable, sizeable, elevated, variable, shapeable) {
    constructor() {
        super(...arguments);
        this.status = STATUS.pending;
    }
    updateSrc(val) {
        if (val !== undefined) {
            this.status = STATUS.pending;
            this.curSrc = val;
        }
    }
    loadSuccess() {
        this.status = STATUS.success;
    }
    loadFailure() {
        this.status = STATUS.failure;
    }
    render() {
        const { curSrc, loadSuccess, loadFailure, status, fontColor, size, color, variety } = this;
        return (<Avatar staticClass={_name} status={status} size={size} color={color} variety={variety} fontColor={fontColor}>
        {this.$slots.default}
        <img staticClass={`${_name}__cover`} alt='' src={curSrc} onLoad={loadSuccess} onError={loadFailure}/>
      </Avatar>);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MAvatar.prototype, "src", void 0);
tslib_1.__decorate([
    Watch('src', { immediate: true })
], MAvatar.prototype, "updateSrc", null);
MAvatar = tslib_1.__decorate([
    Component({
        components: { Avatar }
    })
], MAvatar);
export default MAvatar;
//# sourceMappingURL=avatar.jsx.map