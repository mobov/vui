import * as tslib_1 from "tslib";
import { Component, Prop, Watch, Vue, Emit, Provide } from 'vue-property-decorator';
let TimePickerBase = class TimePickerBase extends Vue {
    constructor() {
        super(...arguments);
        this.DateStore = {
            value: this.valueAdaptI(this.value),
            pickerType: this.pickerType,
            activeType: 'date',
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
            UPDATE: (val, type = 'date') => {
                const self = this.DateStore;
                const result = new Date(self.value);
                if (type === 'year') {
                    result.setFullYear(val);
                    self.value = result.getTime();
                }
                else if (type === 'month') {
                    result.setMonth(val);
                    self.value = result.getTime();
                }
                else if (type === 'hours') {
                    result.setHours(val);
                    self.value = result.getTime();
                }
                else if (type === 'minutes') {
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
    // 输入适配
    valueAdaptI(val) {
        let result = 0;
        if (this.valueFormat === 'timestamp') {
            result = typeof val === 'string' ? Number(val) : val;
        }
        else if (this.valueFormat === 'Date') {
            result = val.getTime();
        }
        return result;
    }
    // 输出适配
    valueAdaptO(val) {
        let result = null;
        if (this.valueFormat === 'timestamp') {
            result = val;
        }
        else if (this.valueFormat === 'Date') {
            result = new Date(val);
        }
        return result;
    }
    handleConfirm() {
        this.DateStore.emitInput();
    }
    handleCancel() { }
    onInput(val) { }
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
            case 'datetime':
                this.DateStore.SET_ACTIVE_TYPE('date');
                break;
            default: this.DateStore.SET_ACTIVE_TYPE(val);
        }
    }
};
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], TimePickerBase.prototype, "desync", void 0);
tslib_1.__decorate([
    Prop({ type: [Date, Number, String], default: new Date().getTime() })
], TimePickerBase.prototype, "value", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'timestamp' })
], TimePickerBase.prototype, "valueFormat", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], TimePickerBase.prototype, "ampm", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 1 })
], TimePickerBase.prototype, "hourStep", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 1 })
], TimePickerBase.prototype, "minuteStep", void 0);
tslib_1.__decorate([
    Prop({ type: [Date, Number, String], default: 2100 })
], TimePickerBase.prototype, "max", void 0);
tslib_1.__decorate([
    Prop({ type: [Date, Number, String], default: 1900 })
], TimePickerBase.prototype, "min", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 0 })
], TimePickerBase.prototype, "firstDayOfWeek", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'date' })
], TimePickerBase.prototype, "pickerType", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], TimePickerBase.prototype, "confirmation", void 0);
tslib_1.__decorate([
    Emit('confirm')
], TimePickerBase.prototype, "handleConfirm", null);
tslib_1.__decorate([
    Emit('cancel')
], TimePickerBase.prototype, "handleCancel", null);
tslib_1.__decorate([
    Emit('input')
], TimePickerBase.prototype, "onInput", null);
tslib_1.__decorate([
    Watch('value', { immediate: true })
], TimePickerBase.prototype, "onValueUpdate", null);
tslib_1.__decorate([
    Watch('ampm', { immediate: true })
], TimePickerBase.prototype, "onAMPMUpdate", null);
tslib_1.__decorate([
    Watch('pickerType', { immediate: true })
], TimePickerBase.prototype, "onPickerTypeChange", null);
tslib_1.__decorate([
    Provide()
], TimePickerBase.prototype, "DateStore", void 0);
TimePickerBase = tslib_1.__decorate([
    Component
], TimePickerBase);
export default TimePickerBase;
//# sourceMappingURL=mixins.jsx.map