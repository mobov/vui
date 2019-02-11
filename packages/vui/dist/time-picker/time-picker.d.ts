import { DatePickerType } from '../types/model';
import TimePickerBase from './mixins';
declare const MTimePicker_base: import("vue-class-component/lib/declarations").VueClass<TimePickerBase>;
export default class MTimePicker extends MTimePicker_base {
    private color;
    private elevation;
    private landscope;
    private timeSelectType;
    readonly classes: {
        'm--landscope': boolean;
    };
    handleActive(type: DatePickerType): void;
    RPanel(): JSX.Element;
    RHandler(): JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
