import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
const compName = 'm-transition-expansion';
function getSize(size) {
    if (!size) {
        return 0;
    }
    const index = size.indexOf('px');
    if (index === -1) {
        return 0;
    }
    return Number(size.substring(0, index));
}
function beforeEnter(el) {
    // @ts-ignore
    el.dataset.originPaddingTop = el.style.paddingTop;
    // @ts-ignore
    el.dataset.originPaddingBottom = el.style.paddingBottom;
    // @ts-ignore
    el.dataset.originOverflow = el.style.overflow;
    el.style.paddingTop = '0';
    el.style.paddingBottom = '0';
    el.style.height = '0';
}
function enter(el) {
    el.style.display = 'block';
    el.style.overflow = 'hidden';
    // @ts-ignore
    el.style.height = el.scrollHeight + getSize(el.dataset.originPaddingTop) + getSize(el.dataset.originPaddingBottom) + 'px';
    // @ts-ignore
    el.style.paddingTop = el.dataset.originPaddingTop;
    // @ts-ignore
    el.style.paddingBottom = el.dataset.originPaddingBottom;
}
function afterEnter(el) {
    // el.style.display = '';
    // el.style.height = '';
    // @ts-ignore
    el.style.overflow = el.dataset.originOverflow;
    // @ts-ignore
    el.style.paddingTop = el.dataset.originPaddingTop;
    // @ts-ignore
    el.style.paddingBottom = el.dataset.originPaddingBottom;
}
function beforeLeave(el) {
    // @ts-ignore
    el.dataset.originPaddingTop = el.style.paddingTop;
    // @ts-ignore
    el.dataset.originPaddingBottom = el.style.paddingBottom;
    // @ts-ignore
    el.dataset.originOverflow = el.style.overflow;
    el.style.display = 'block';
    if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
    }
    el.style.overflow = 'hidden';
}
function leave(el) {
    if (el.scrollHeight !== 0) {
        setTimeout(() => {
            // @ts-ignore
            el.style.height = 0;
            // @ts-ignore
            el.style.paddingTop = 0;
            // @ts-ignore
            el.style.paddingBottom = 0;
        });
    }
}
function afterLeave(el) {
    el.style.display = 'none';
    el.style.height = '';
    // @ts-ignore
    el.style.overflow = el.dataset.originOverflow;
    // @ts-ignore
    el.style.paddingTop = el.dataset.originPaddingTop;
    // @ts-ignore
    el.style.paddingBottom = el.dataset.originPaddingBottom;
}
let MTransitionExpansion = class MTransitionExpansion extends Vue {
    render(h, { props, data, children }) {
        return (<transition name={compName} onBeforeEnter={beforeEnter} onEnter={enter} onAfterEnter={afterEnter} onBeforLeave={beforeLeave} onLeave={leave}>
        {children}
      </transition>);
    }
};
MTransitionExpansion = tslib_1.__decorate([
    Component({
        functional: true
    })
], MTransitionExpansion);
export default MTransitionExpansion;
//# sourceMappingURL=expansion.jsx.map