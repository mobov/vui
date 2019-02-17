import { Vue } from 'vue-property-decorator';
import { color } from '../../core/constant';
export default class MTimePickerPanelYear extends Vue {
    type: color;
    max: number;
    min: number;
    DateStore: any;
    onClick(year: number): void;
    RCols(): any;
    render(): JSX.Element;
}
