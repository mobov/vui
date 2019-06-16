import color from '../core/mixin/color';
import elevation from '../core/mixin/elevation';
import { datePickerType } from '../core/constant';
declare const MTimePicker_base;
export default class MTimePicker extends MTimePicker_base {
    landscope: boolean;
    desync: boolean;
    value: any;
    private valueFormat;
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
    readonly styles: {};
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
