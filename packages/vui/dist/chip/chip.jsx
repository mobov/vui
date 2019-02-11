import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { genColor, genElevation, genSize, genHover } from '../core/style-gen';
import MAvatar from '../avatar';
import MIcon from '../icon';
const _name = 'm-chip';
let MChip = class MChip extends Vue {
    get styles() {
        const { color, fontColor, size, elevation } = this;
        const styles = {};
        genColor(styles, _name, 'color', color);
        genColor(styles, _name, 'font-color', fontColor);
        genSize(styles, _name, 'size', size);
        genElevation(styles, _name, elevation);
        genHover(styles, _name, 'hover-color', color);
        return styles;
    }
    get classes() {
        const { variety, shape, closeable, closeover } = this;
        return {
            [`m-variety-${variety}`]: true,
            [`m-shape-${shape}`]: true,
            [`${_name}--closeable`]: closeable,
            [`${_name}--closeover`]: closeover
        };
    }
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
        return (closeable || closeover
            ? <MIcon class={`${_name}__close`} onClick={onClose} name='cancel'/>
            : undefined);
    }
    render() {
        const { classes, styles, $slots, RMedia, RClose, onClick } = this;
        return (<div staticClass={_name} style={styles} class={classes} onClick={onClick}>
        {RMedia()}
        <div staticClass={`${_name}__main`}>
          {$slots.default}
        </div>
        {RClose()}
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MChip.prototype, "size", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MChip.prototype, "color", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MChip.prototype, "fontColor", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MChip.prototype, "elevation", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'normal' })
], MChip.prototype, "variety", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'circle' })
], MChip.prototype, "shape", void 0);
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
    Component({ components: { MAvatar, MIcon } })
], MChip);
export default MChip;
//# sourceMappingURL=chip.jsx.map