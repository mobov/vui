/**
 * 时间选择器头部显示板
 */
import { Vue } from 'vue-property-decorator';
import { color } from '../../core/constant';
export default class MTimePickerHeader extends Vue {
    color: color;
    DateStore: any;
    readonly classes: {
        [x: string]: boolean;
    };
    handleAMToggle(val: boolean, oldVal: boolean): void;
    RDate(): JSX.Element | undefined;
    RTime(): JSX.Element | undefined;
    RYear(): JSX.Element | undefined;
    RMonth(): JSX.Element | undefined;
    render(): JSX.Element;
}
