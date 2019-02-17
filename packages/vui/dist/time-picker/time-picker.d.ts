import colorable from '../core/mixin/colorable';
import elevated from '../core/mixin/elevated';
import { dateValueFormat, datePickerType } from './constant';
declare const MTimePicker_base: import("vue-class-component/lib/declarations").VueClass<colorable & elevated>;
export default class MTimePicker extends MTimePicker_base {
    landscope: boolean;
    desync: boolean;
    value: any;
    valueFormat: dateValueFormat;
    ampm: boolean;
    hourStep: number;
    minuteStep: number;
    max: any;
    min: any;
    firstDayOfWeek: number;
    pickerType: datePickerType;
    confirmation: boolean;
    onConfirm(): void;
    onCancel(): void;
    onInput(val: any): void;
    valueAdaptI(val: any): number;
    valueAdaptO(val: number): any;
    onValueUpdate(val: any, oldVal: any): void;
    onAMPMUpdate(val: any, oldVal: any): void;
    onPickerTypeChange(val: any): void;
    DateStore: any;
    readonly classes: {
        'm--landscope': boolean;
    };
    RPanel(): JSX.Element;
    RHandler(): JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
