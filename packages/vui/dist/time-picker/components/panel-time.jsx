import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator';
// import { getStyle } from '@megmore/es-helper'
import MButton from '../../button';
import MIcon from '../../icon';
import { dateTimeValueType } from '../constant';
import { color, variety, shape } from '../../core/constant';
const compName = 'm-time-picker-panel-time';
// const baseFont: any = getStyle(document.documentElement, 'font-size')
// const clockSize = 12 * Number(baseFont.substring(0, baseFont.length - 2))
// const clockStyle = {
//     height: `${clockSize}px`,
//     width:  `${clockSize}px`,
// }
let MTimePickerPanelTime = class MTimePickerPanelTime extends Vue {
    onClick(val, type) {
        this.DateStore.SET_ACTIVE_TYPE(type);
        this.DateStore.UPDATE((type === dateTimeValueType.hours && this.DateStore.ampm && !this.DateStore.am)
            ? val + 12
            : val, type);
    }
    RList(type) {
        const { onClick, hourStep, minuteStep } = this;
        const { ampm } = this.DateStore;
        const min = 0;
        const max = type === dateTimeValueType.hours ? ampm ? 11 : 23 : 59;
        const step = type === dateTimeValueType.hours ? hourStep : minuteStep;
        const time = this.DateStore[type];
        const Temps = [];
        for (let tempTime = min; tempTime <= max; tempTime += step) {
            const isCurrent = tempTime === time;
            Temps.push(<MButton onClick={() => onClick(tempTime, type)} size="sm" block class="m-m-0 m-p-0 m--block" shape={shape.circle} elevation={0} variety={isCurrent ? variety.normal : variety.flat} color={isCurrent ? color.primary : color.default}>
          {tempTime}
        </MButton>);
        }
        return (<div staticClass={`${compName}__list ${compName}__list-${type}`}>
        {Temps}
      </div>);
    }
    render() {
        const { RList } = this;
        const Result = [];
        Result.push(RList(dateTimeValueType.hours));
        Result.push(RList(dateTimeValueType.minutes));
        return (<div staticClass={compName}>{Result}</div>);
    }
};
tslib_1.__decorate([
    Prop({ type: String, default: color.primary })
], MTimePickerPanelTime.prototype, "type", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 1 })
], MTimePickerPanelTime.prototype, "hourStep", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 1 })
], MTimePickerPanelTime.prototype, "minuteStep", void 0);
tslib_1.__decorate([
    Inject()
], MTimePickerPanelTime.prototype, "DateStore", void 0);
tslib_1.__decorate([
    Emit('pick')
], MTimePickerPanelTime.prototype, "onClick", null);
MTimePickerPanelTime = tslib_1.__decorate([
    Component({ components: { MButton, MIcon } })
], MTimePickerPanelTime);
export default MTimePickerPanelTime;
//# sourceMappingURL=panel-time.jsx.map