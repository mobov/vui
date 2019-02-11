import { Vue } from 'vue-property-decorator';
import { DateTimeValueType } from '../../types/model';
export default class MTimePickerPanelTime extends Vue {
    private type;
    private timeSelectType;
    private hourStep;
    private minuteStep;
    private DateStore;
    onClick(val: number, type: DateTimeValueType): void;
    RList(type: DateTimeValueType): JSX.Element;
    render(): JSX.Element;
}
