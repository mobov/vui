import { Vue } from 'vue-property-decorator';
import { DateValueFormat, DatePickerType } from '../types/model';
export default class TimePickerBase extends Vue {
    desync: boolean;
    value: any;
    valueFormat: DateValueFormat;
    ampm: boolean;
    hourStep: number;
    minuteStep: number;
    max: any;
    min: any;
    firstDayOfWeek: number;
    pickerType: DatePickerType;
    confirmation: boolean;
    valueAdaptI(val: any): number;
    valueAdaptO(val: number): any;
    handleConfirm(): void;
    handleCancel(): void;
    onInput(val: any): void;
    onValueUpdate(val: any, oldVal: any): void;
    onAMPMUpdate(val: any, oldVal: any): void;
    onPickerTypeChange(val: any): void;
    DateStore: any;
}
