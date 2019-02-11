import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator';
import MButton from '../../button';
import MIcon from '../../icon';
const _name = 'm-time-picker-panel-date';
const WeekMap = ['日', '一', '二', '三', '四', '五', '六'];
let MTimePickerPanelDate = class MTimePickerPanelDate extends Vue {
    constructor() {
        super(...arguments);
        this.viewValue = this.DateStore.value;
    }
    get viewDateValue() {
        return new Date(this.viewValue);
    }
    set viewDateValue(val) {
        this.viewValue = val;
    }
    get viewYear() {
        return this.viewDateValue.getFullYear();
    }
    get viewMonth() {
        return this.viewDateValue.getMonth();
    }
    get viewDate() {
        return this.viewDateValue.getDate();
    }
    handleMonthToggle(action) {
        const date = new Date(this.viewValue);
        const month = date.getMonth();
        date.setMonth(action === 'prev' ? month - 1 : month + 1);
        this.viewValue = date.getTime();
    }
    handleDateClick(yearVal, monthVal, dateVal) {
        const { year, month, date } = this.DateStore;
        if (yearVal === year &&
            monthVal === month &&
            dateVal === date) {
            return;
        }
        const temp = new Date(this.viewValue);
        if (yearVal !== year) {
            temp.setFullYear(yearVal);
        }
        if (monthVal !== month) {
            temp.setMonth(monthVal);
        }
        if (dateVal !== date) {
            temp.setDate(dateVal);
        }
        this.DateStore.UPDATE(temp.getTime());
    }
    RTableHead() {
        const Tds = [];
        WeekMap.forEach(week => Tds.push(<td>{week}</td>));
        return (<thead><tr>{Tds}</tr></thead>);
    }
    RTableBody() {
        const { viewDateValue, viewYear, viewMonth, handleDateClick, RTableHead } = this;
        const { year, month, date } = this.DateStore;
        const nowValue = new Date();
        const isNowDate = nowValue.getFullYear() === viewYear && nowValue.getMonth() === viewMonth;
        const nowDate = nowValue.getDate();
        const viewMonthDays = viewDateValue.maxDayOfMonth();
        const viewFirstWeekDay = viewDateValue.firstWeekDay();
        const isCurMonth = viewYear === year && viewMonth === month;
        const Trs = [];
        let Tds = [];
        for (let pre = 0; pre < viewFirstWeekDay; pre++) {
            Tds.push(<td> </td>);
        }
        for (let tempDate = 1; tempDate <= viewMonthDays; tempDate++) {
            const isCurDate = isCurMonth && (tempDate === date);
            const isToday = isNowDate && (tempDate === nowDate);
            Tds.push(<td><MButton class='m-m-0 m-p-0' size='sm' shape='circle' elevation={0} variety={isCurDate ? 'normal' : isToday ? 'outline' : 'flat'} color={isCurDate || isToday ? 'primary' : 'default'} onClick={() => handleDateClick(viewYear, viewMonth, tempDate)}>
        {tempDate}
      </MButton></td>);
            if ((tempDate + viewFirstWeekDay) % 7 === 0 || tempDate === viewMonthDays) {
                Trs.push(<tr>{Tds}</tr>);
                Tds = [];
            }
        }
        return (<tbody>{Trs}</tbody>);
    }
    render() {
        const { viewYear, handleMonthToggle, RTableHead, RTableBody } = this;
        return (<div staticClass={_name}>
        <div class={`${_name}__header`}>
          <div staticClass={`${_name}__header-year`}>
            <MButton variety='flat' staticClass='m-m-0' color='default' elevation={0} onClick={() => this.DateStore.SET_ACTIVE_TYPE('year')}>
              {viewYear}
            </MButton>
          </div>
          <div staticClass={`${_name}__header-handler`}>
            <MButton variety='flat' staticClass='m-m-0' elevation={0} shape='circle' color='default' icon='navigate_before' onClick={() => handleMonthToggle('prev')}/>
            <MButton variety='flat' staticClass='m-m-0' elevation={0} shape='circle' color='default' icon='navigate_next' onClick={() => handleMonthToggle('next')}/>
          </div>
        </div>
        <table class={`${_name}__table`}>
          {RTableHead()}
          {RTableBody()}
        </table>
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: String, default: 'primary' })
], MTimePickerPanelDate.prototype, "type", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MTimePickerPanelDate.prototype, "min", void 0);
tslib_1.__decorate([
    Prop({ type: Number })
], MTimePickerPanelDate.prototype, "max", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 0 })
], MTimePickerPanelDate.prototype, "firstDayOfWeek", void 0);
tslib_1.__decorate([
    Inject()
], MTimePickerPanelDate.prototype, "DateStore", void 0);
tslib_1.__decorate([
    Emit('pick')
], MTimePickerPanelDate.prototype, "handleDateClick", null);
MTimePickerPanelDate = tslib_1.__decorate([
    Component({ components: { MButton, MIcon } })
], MTimePickerPanelDate);
export default MTimePickerPanelDate;
//# sourceMappingURL=panel-date.jsx.map