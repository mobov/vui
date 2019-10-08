/**
 * 时间选择器头部显示板
 */
import { Vue } from 'vue-property-decorator';
export default class MTimePickerHeader extends Vue {
    DateStore: any;
    readonly classes: {
        [x: string]: boolean;
    };
    handleAMToggle(val: boolean, oldVal: boolean): void;
    RDate(): JSX.Element;
    RTime(): JSX.Element;
    RYear(): JSX.Element;
    RMonth(): JSX.Element;
    render(): JSX.Element;
}
