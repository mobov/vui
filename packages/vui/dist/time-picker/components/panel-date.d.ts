import { Vue } from 'vue-property-decorator';
import { color } from '../../core/constant';
export default class MTimePickerPanelDate extends Vue {
    type: color;
    min: number;
    max: number;
    firstDayOfWeek: number;
    DateStore: any;
    viewValue: number;
    viewDateValue: any;
    readonly viewYear: number;
    readonly viewMonth: number;
    readonly viewDate: number;
    handleMonthToggle(action: 'prev' | 'next'): void;
    handleDateClick(yearVal: number, monthVal: number, dateVal: number): void;
    RTableHead(): JSX.Element;
    RTableBody(): JSX.Element;
    render(): JSX.Element;
}
