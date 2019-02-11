import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';
import Chip from './chip.style';
import MAvatar from '../avatar';
import MIcon from '../icon';
import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
import shapeable from '../core/mixin/shapeable';
const _name = 'm-chip';
let MChip = class MChip extends Mixins(colorable, sizeable, elevated, variable, shapeable) {
    onClose(e) { e.stopPropagation(); }
    onClick(e) { }
    RMedia() {
        const { $slots } = this;
        if ($slots.media) {
            if (!$slots.media[0].data.staticClass) {
                $slots.media[0].data.staticClass = '';
            }
            $slots.media[0].data.staticClass += ` ${_name}__media`;
            return $slots.media;
        }
        return undefined;
    }
    RClose() {
        const { closeable, closeover, onClose } = this;
        return ((closeable || closeover)
            ? <MIcon staticClass={`${_name}__close`} onClick={() => onClose} name='cancel'/>
            : undefined);
    }
    render() {
        const { $slots, color, fontColor, elevation, variety, shape, size, RMedia, RClose, onClick } = this;
        return (<Chip staticClass={_name} color={color} fontColor={fontColor} elevation={elevation} variety={variety} shape={shape} size={size} onClick={onClick}>
        {RMedia()}
        <div staticClass={`${_name}__main`}>
          {$slots.default}
        </div>
        {RClose()}
      </Chip>);
    }
};
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MChip.prototype, "closeable", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MChip.prototype, "closeover", void 0);
tslib_1.__decorate([
    Emit('close')
], MChip.prototype, "onClose", null);
tslib_1.__decorate([
    Emit('click')
], MChip.prototype, "onClick", null);
MChip = tslib_1.__decorate([
    Component({
        components: { Chip, MAvatar, MIcon }
    })
], MChip);
export default MChip;
//# sourceMappingURL=chip.jsx.map