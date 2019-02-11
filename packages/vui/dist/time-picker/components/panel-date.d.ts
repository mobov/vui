import { Vue } from 'vue-property-decorator';
export default class MTimePickerPanelDate extends Vue {
    private type;
    private min;
    private max;
    private firstDayOfWeek;
    private DateStore;
    private viewValue;
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
