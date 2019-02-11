import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
// import MSpin from '@/components/spin'
import MIcon from '../icon';
import { VARIETY, SHAPE, COLOR } from '../core/constant/constant';
import { genColor, genElevation, genSize, genHover } from '../core/style-gen';
const _name = 'm-button';
let MButton = class MButton extends Vue {
    handleClick(e) { }
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
        const { variety, shape, block } = this;
        return {
            [`m-variety-${variety}`]: true,
            [`m-shape-${shape}`]: true,
            'm--block': block
        };
    }
    render() {
        const { classes, styles, icon, handleClick } = this;
        return (<button v-m-ripple staticClass={_name} style={styles} class={classes} onClick={handleClick}>
        {!icon ? undefined
            : <MIcon name={icon}/>}
        {!this.$slots.default ? undefined
            : <div class={`${_name}__main`}>{this.$slots.default}</div>}
      </button>);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MButton.prototype, "size", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MButton.prototype, "elevation", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: COLOR.primary })
], MButton.prototype, "color", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MButton.prototype, "fontColor", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: SHAPE.corner })
], MButton.prototype, "shape", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: VARIETY.normal })
], MButton.prototype, "variety", void 0);
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
], MButton.prototype, "handleClick", null);
MButton = tslib_1.__decorate([
    Component({ components: { MIcon } })
], MButton);
export default MButton;
//# sourceMappingURL=button.jsx.map