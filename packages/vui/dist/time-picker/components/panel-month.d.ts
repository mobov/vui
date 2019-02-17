import { Vue } from 'vue-property-decorator';
import { color } from '../../core/constant';
export default class MTimePickerPanelMonth extends Vue {
    type: color;
    disabledValue: number;
    DateStore: any;
    handleClick(month: number): void;
    RCols(): any;
    render(): JSX.Element;
}
