import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';
import MAvatar from '../avatar';
import MIcon from '../icon';
import '../icon/icons/cancel';
import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
import shapeable from '../core/mixin/shapeable';
import { genColor, genFontColor, genSize, genElevation, genVariety, genShape } from '../core/util';
const compName = 'm-chip';
let MChip = class MChip extends Mixins(colorable, sizeable, elevated, variable, shapeable) {
    onClose(e) { e.stopPropagation(); }
    onClick(e) { }
    get styles() {
        const { fontColor, size, color, elevation } = this;
        const styles = {};
        genFontColor(styles, compName, fontColor);
        genColor(styles, compName, color);
        genSize(styles, compName, size);
        genElevation(styles, compName, elevation);
        // genHover(styles, _name, 'hover-color', color)
        return styles;
    }
    get classes() {
        const { closeable, closeover, variety, shape } = this;
        const classes = {
            'm--closeable': closeable,
            'm--closeover': closeover,
        };
        genVariety(classes, variety);
        genShape(classes, shape);
        return classes;
    }
    RMedia() {
        const { $slots } = this;
        if ($slots.media) {
            if (!$slots.media[0].data.staticClass) {
                $slots.media[0].data.staticClass = '';
            }
            $slots.media[0].data.staticClass += ` ${compName}__media`;
            return $slots.media;
        }
        return undefined;
    }
    RClose() {
        const { closeable, closeover, onClose } = this;
        return ((closeable || closeover)
            ? <MIcon staticClass={`${compName}__close`} onClick={() => onClose} name='cancel'/>
            : undefined);
    }
    render() {
        const { $slots, RMedia, RClose, onClick } = this;
        return (<div staticClass={compName} onClick={onClick}>
        {RMedia()}
        <div staticClass={`${compName}__main`}>
          {$slots.default}
        </div>
        {RClose()}
      </div>);
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
        components: { MAvatar, MIcon }
    })
], MChip);
export default MChip;
//# sourceMappingURL=chip.jsx.map