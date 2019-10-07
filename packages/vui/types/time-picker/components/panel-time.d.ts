import { Vue } from 'vue-property-decorator';
import { color, dateTimeValueType } from '../../core/constants';
export default class MTimePickerPanelTime extends Vue {
    color: color;
    hourStep: number;
    minuteStep: number;
    DateStore: any;
    onClick(val: number, type: dateTimeValueType): void;
    RList(type: dateTimeValueType): JSX.Element;
    render(): JSX.Element;
}
