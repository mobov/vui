import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Provide, Mixins, Watch } from 'vue-property-decorator';
import colorable from '../core/mixin/colorable';
import elevated from '../core/mixin/elevated';
import MTimePickerHeader from './components/header';
import MTimePickerPanelDate from './components/panel-date';
import MTimePickerPanelYear from './components/panel-year';
import MTimePickerPanelMonth from './components/panel-month';
import MTimePickerPanelTime from './components/panel-time';
import MTimePickerHandler from './components/handler';
import { dateValueFormat, datePickerType, dateValueType } from './constant';
const compName = 'm-time-picker';
let MTimePicker = class MTimePicker extends Mixins(colorable, elevated) {
    constructor() {
        super(...arguments);
        this.DateStore = {
            value: this.valueAdaptI(this.value),
            pickerType: this.pickerType,
            activeType: datePickerType.date,
            ampm: false,
            get dateValue() {
                return new Date(this.value);
            },
            get year() {
                return this.dateValue.getFullYear();
            },
            get month() {
                return this.dateValue.getMonth();
            },
            get weekDay() {
                return this.dateValue.getDay();
            },
            get date() {
                return this.dateValue.getDate();
            },
            get hours() {
                let result = this.dateValue.getHours();
                if (this.ampm && result >= 12) {
                    result = result - 12;
                }
                return result;
            },
            get minutes() {
                return this.dateValue.getMinutes();
            },
            get am() {
                return this.dateValue.getHours() < 12;
            },
            SET_ACTIVE_TYPE(type) {
                if (type === this.activeType) {
                    return;
                }
                this.activeType = type;
            },
            SET_PICKER_TYPE(type) {
                if (type === this.pickerType) {
                    return;
                }
                this.pickerType = type;
            },
            SET_AM(val) {
                if (val === this.am) {
                    return;
                }
                const temp = new Date(this.value);
                temp.setHours(val ? this.hours : this.hours + 12);
                this.value = temp.getTime();
            },
            SET_AMPM(val) {
                if (val === this.ampm) {
                    return;
                }
                this.ampm = val;
            },
            UPDATE: (val, type = dateValueType.date) => {
                const self = this.DateStore;
                const result = new Date(self.value);
                if (type === dateValueType.year) {
                    result.setFullYear(val);
                    self.value = result.getTime();
                }
                else if (type === dateValueType.month) {
                    result.setMonth(val);
                    self.value = result.getTime();
                }
                else if (type === dateValueType.hours) {
                    result.setHours(val);
                    self.value = result.getTime();
                }
                else if (type === dateValueType.minutes) {
                    result.setMinutes(val);
                    self.value = result.getTime();
                }
                else {
                    self.value = val;
                }
                if (this.desync) {
                    return;
                }
                if (this.confirmation) {
                    return;
                }
                if (this.valueAdaptI(this.value) === self.value) {
                    return;
                }
                self.emitInput();
            },
            emitInput: () => {
                const self = this.DateStore;
                const outValue = this.valueAdaptO(self.value);
                this.onInput(outValue);
            }
        };
    }
    onConfirm() {
        this.DateStore.emitInput();
    }
    onCancel() { }
    onInput(val) { }
    // 输入适配
    valueAdaptI(val) {
        let result = 0;
        if (this.valueFormat === dateValueFormat.timestamp) {
            result = typeof val === 'string' ? Number(val) : val;
        }
        else if (this.valueFormat === dateValueFormat.Date) {
            result = val.getTime();
        }
        return result;
    }
    // 输出适配
    valueAdaptO(val) {
        let result = null;
        if (this.valueFormat === dateValueFormat.timestamp) {
            result = val;
        }
        else if (this.valueFormat === dateValueFormat.Date) {
            result = new Date(val);
        }
        return result;
    }
    onValueUpdate(val, oldVal) {
        if (val === oldVal) {
            return;
        }
        this.DateStore.UPDATE(this.valueAdaptI(val));
    }
    onAMPMUpdate(val, oldVal) {
        if (val === oldVal) {
            return;
        }
        this.DateStore.SET_AMPM(val);
    }
    onPickerTypeChange(val) {
        this.DateStore.SET_PICKER_TYPE(val);
        switch (val) {
            case datePickerType.datetime:
                this.DateStore.SET_ACTIVE_TYPE(dateValueType.date);
                break;
            default: this.DateStore.SET_ACTIVE_TYPE(val);
        }
    }
    get classes() {
        const { landscope } = this;
        return {
            'm--landscope': landscope
        };
    }
    RPanel() {
        const { color, firstDayOfWeek, max, min } = this;
        const { activeType } = this.DateStore;
        switch (activeType) {
            case datePickerType.date:
                return <MTimePickerPanelDate max={max} min={min} color={color} firstDayOfWeek={firstDayOfWeek}/>;
            case datePickerType.year:
                return <MTimePickerPanelYear max={max} min={min} onPick={() => { this.DateStore.SET_ACTIVE_TYPE(datePickerType.date); }}/>;
            case datePickerType.month:
                return <MTimePickerPanelMonth onPick={() => { this.DateStore.SET_ACTIVE_TYPE(datePickerType.date); }}/>;
            default:
                return <MTimePickerPanelTime color={color} onPick={() => { this.DateStore.SET_ACTIVE_TYPE(datePickerType.date); }}/>;
        }
    }
    RHandler() {
        const { confirmation, onConfirm, onCancel } = this;
        return !confirmation ? undefined
            : <MTimePickerHandler onConfirm={onConfirm} onCancel={onCancel}/>;
    }
    render() {
        const { classes, color, RPanel, RHandler } = this;
        const { pickerType } = this.DateStore;
        return (<div staticClass={`${compName} m--${pickerType}`} class={classes}>
        <div staticClass={`${compName}__main`}>
          <MTimePickerHeader color={color}/>
          <div staticClass={`${compName}-panel`}>{RPanel()}</div>
        </div>
        {RHandler()}
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MTimePicker.prototype, "landscope", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MTimePicker.prototype, "desync", void 0);
tslib_1.__decorate([
    Prop({ type: [Date, Number, String], default: new Date().getTime() })
], MTimePicker.prototype, "value", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: dateValueFormat.timestamp })
], MTimePicker.prototype, "valueFormat", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MTimePicker.prototype, "ampm", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 1 })
], MTimePicker.prototype, "hourStep", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 1 })
], MTimePicker.prototype, "minuteStep", void 0);
tslib_1.__decorate([
    Prop({ type: [Date, Number, String], default: 2100 })
], MTimePicker.prototype, "max", void 0);
tslib_1.__decorate([
    Prop({ type: [Date, Number, String], default: 1900 })
], MTimePicker.prototype, "min", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 0 })
], MTimePicker.prototype, "firstDayOfWeek", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: datePickerType.date })
], MTimePicker.prototype, "pickerType", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MTimePicker.prototype, "confirmation", void 0);
tslib_1.__decorate([
    Emit('confirm')
], MTimePicker.prototype, "onConfirm", null);
tslib_1.__decorate([
    Emit('cancel')
], MTimePicker.prototype, "onCancel", null);
tslib_1.__decorate([
    Emit('input')
], MTimePicker.prototype, "onInput", null);
tslib_1.__decorate([
    Watch('value', { immediate: true })
], MTimePicker.prototype, "onValueUpdate", null);
tslib_1.__decorate([
    Watch('ampm', { immediate: true })
], MTimePicker.prototype, "onAMPMUpdate", null);
tslib_1.__decorate([
    Watch('pickerType', { immediate: true })
], MTimePicker.prototype, "onPickerTypeChange", null);
tslib_1.__decorate([
    Provide()
], MTimePicker.prototype, "DateStore", void 0);
MTimePicker = tslib_1.__decorate([
    Component({
        components: {
            MTimePickerHeader,
            MTimePickerPanelDate,
            MTimePickerPanelYear,
            MTimePickerPanelMonth,
            MTimePickerPanelTime,
            MTimePickerHandler
        }
    })
], MTimePicker);
export default MTimePicker;
//# sourceMappingURL=time-picker.jsx.map