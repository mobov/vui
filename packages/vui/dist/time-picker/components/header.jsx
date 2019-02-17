import * as tslib_1 from "tslib";
/**
 * 时间选择器头部显示板
 */
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { color } from '../../core/constant';
import { datePickerType, dateTimeValueType } from '../constant';
const WeekMap = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
const MonthMap = ['一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'];
const compName = 'm-time-picker-header';
let MTimePickerHeader = class MTimePickerHeader extends Vue {
    get classes() {
        return {
            [`m--${this.DateStore.pickerType}`]: true
        };
    }
    handleAMToggle(val, oldVal) {
        if (val === oldVal) {
            return;
        }
        this.DateStore.SET_AM(val);
    }
    RDate() {
        const { year, month, weekDay, date, pickerType, activeType } = this.DateStore;
        return !['datetime', 'date'].includes(pickerType) ? undefined : (<div staticClass={`${compName}__date`}>
        <div>
          <a staticClass={`${compName}__date-year`} class={{ 'm--active': activeType === datePickerType.year }} onClick={() => { this.DateStore.SET_ACTIVE_TYPE(datePickerType.year); }}>{year}</a>
          <span staticClass={`${compName}__date-weekDay`}>{WeekMap[weekDay]}</span>
        </div>
        <div staticClass={`${compName}__date-date`}>
          <a class={{ 'm--active': activeType === datePickerType.month }} onClick={() => { this.DateStore.SET_ACTIVE_TYPE(datePickerType.month); }}>
            {(month + 1).dateZeroize()}
          </a>-
          <a class={{ 'm--active': activeType === datePickerType.date }} onClick={() => { this.DateStore.SET_ACTIVE_TYPE(datePickerType.date); }}>
            {date.dateZeroize()}
          </a>
        </div>
      </div>);
    }
    RTime() {
        const { handleAMToggle } = this;
        const { hours, minutes, pickerType, activeType, ampm, am } = this.DateStore;
        return !['datetime', 'time'].includes(pickerType) ? undefined : (<div class={`${compName}__time`}>
        {!ampm ? undefined
            : <div staticClass={`${compName}__time-ampm`}>
            <a class={{ 'm--active': am }} onClick={() => { handleAMToggle(true, am); }}>
              AM
            </a>
            <a class={{ 'm--active': !am }} onClick={() => { handleAMToggle(false, am); }}>
              PM
            </a>
          </div>}
        <div staticClass={`${compName}__time-hours`}>
          <a class={{ 'm--active': activeType === dateTimeValueType.hours }} onClick={() => { this.DateStore.SET_ACTIVE_TYPE(dateTimeValueType.hours); }}>
            {hours.dateZeroize()}
          </a>:
          <a class={{ 'm--active': activeType === dateTimeValueType.minutes }} onClick={() => { this.DateStore.SET_ACTIVE_TYPE(dateTimeValueType.minutes); }}>
            {minutes.dateZeroize()}
          </a>
        </div>
      </div>);
    }
    RYear() {
        const { year, pickerType } = this.DateStore;
        return pickerType !== 'year' ? undefined : (<div staticClass={`${compName}__year`}>
        {year}
      </div>);
    }
    RMonth() {
        const { month, pickerType } = this.DateStore;
        return pickerType !== datePickerType.month ? undefined : (<div staticClass={`${compName}__month`}>
        {MonthMap[month]}
      </div>);
    }
    render() {
        const { classes, RDate, RTime, RYear, RMonth } = this;
        return (<div staticClass={`${compName}`} class={classes}>
        {RYear()}
        {RMonth()}
        {RDate()}
        <div style="flex-grow:1"/>
        {RTime()}
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: String, default: color.primary })
], MTimePickerHeader.prototype, "color", void 0);
tslib_1.__decorate([
    Inject()
], MTimePickerHeader.prototype, "DateStore", void 0);
MTimePickerHeader = tslib_1.__decorate([
    Component
], MTimePickerHeader);
export default MTimePickerHeader;
//# sourceMappingURL=header.jsx.map