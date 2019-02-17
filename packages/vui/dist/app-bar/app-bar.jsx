import * as tslib_1 from "tslib";
import { Component, Mixins } from 'vue-property-decorator';
import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
import { genFontColor, genColor, genElevation, genSize, genVariety } from '../core/util';
const compName = 'm-app-bar';
let MAppBar = class MAppBar extends Mixins(colorable, elevated, sizeable, variable) {
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
        const { variety } = this;
        const classes = {};
        genVariety(classes, variety);
        return classes;
    }
    render() {
        const { $slots, classes, styles } = this;
        return (<div staticClass={compName} style={styles} class={classes}>
        {$slots.default}
      </div>);
    }
};
MAppBar = tslib_1.__decorate([
    Component
], MAppBar);
export default MAppBar;
//# sourceMappingURL=app-bar.jsx.map