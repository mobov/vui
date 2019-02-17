import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
import { genSize } from '../core/util';
import { Fill } from '../core/constant';
const compName = 'm-view';
let MView = class MView extends Vue {
    constructor() {
        super(...arguments);
        this.isHeader = false;
        this.isFooter = false;
        this.isLeft = false;
        this.isRight = false;
    }
    get classes() {
        const { fillHeader, fillFooter, isHeader, isFooter, isLeft, isRight } = this;
        return {
            'm--with-header': isHeader,
            'm--with-footer': isFooter,
            'm--with-left': isLeft,
            'm--with-right': isRight,
            [`m--Fill-header-${fillHeader}`]: true,
            [`m--Fill-footer-${fillFooter}`]: true
        };
    }
    get styles() {
        const { isHeader, isFooter, isLeft, isRight, headerSize, footerSize, leftSize, rightSize } = this;
        const styles = {};
        if (isHeader) {
            genSize(styles, `${compName}-header`, headerSize);
        }
        if (isFooter) {
            genSize(styles, `${compName}-footer`, footerSize);
        }
        if (isLeft) {
            genSize(styles, `${compName}-left`, leftSize);
        }
        if (isRight) {
            genSize(styles, `${compName}-right`, rightSize);
        }
        return styles;
    }
    RHeader() {
        return (<transition name="m-transition-slide-down">
        {this.isHeader ? <div staticClass={`${compName}-header`}>{this.$slots.header}</div> : undefined}
      </transition>);
    }
    RFooter() {
        return (<transition name="m-transition-slide-up">
        {this.isFooter ? <div staticClass={`${compName}-footer`}>{this.$slots.footer}</div> : undefined}
      </transition>);
    }
    RLeft() {
        return (<transition name="m-transition-slide-left">
        {this.isLeft ? <div staticClass={`${compName}-left`}>{this.$slots.left}</div> : undefined}
      </transition>);
    }
    RRight() {
        return (<transition name="m-transition-slide-right">
        {this.isRight ? <div staticClass={`${compName}-right`}>{this.$slots.right}</div> : undefined}
      </transition>);
    }
    render() {
        const { $slots, styles, classes, RHeader, RFooter, RLeft, RRight } = this;
        this.isHeader = $slots.header !== undefined;
        this.isFooter = $slots.footer !== undefined;
        this.isLeft = $slots.left !== undefined;
        this.isRight = $slots.right !== undefined;
        console.log(styles);
        return (<div staticClass={compName} style={styles} class={classes}>
        <section staticClass={`${compName}-main`}>
          {$slots.default}
        </section>
        {RHeader()}
        {RFooter()}
        {RLeft()}
        {RRight()}
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: String, default: Fill.both })
], MView.prototype, "fillHeader", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: Fill.both })
], MView.prototype, "fillFooter", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MView.prototype, "headerSize", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MView.prototype, "footerSize", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MView.prototype, "leftSize", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MView.prototype, "rightSize", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MView.prototype, "headerIndex", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MView.prototype, "footerIndex", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MView.prototype, "leftIndex", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MView.prototype, "rightIndex", void 0);
MView = tslib_1.__decorate([
    Component
], MView);
export default MView;
//# sourceMappingURL=view.jsx.map