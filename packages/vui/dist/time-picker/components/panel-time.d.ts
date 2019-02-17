import { Vue } from 'vue-property-decorator';
import { dateTimeValueType } from '../constant';
import { color } from '../../core/constant';
export default class MTimePickerPanelTime extends Vue {
    type: color;
    hourStep: number;
    minuteStep: number;
    DateStore: any;
    onClick(val: number, type: dateTimeValueType): void;
    RList(type: dateTimeValueType): JSX.Element;
    render(): JSX.Element;
}
