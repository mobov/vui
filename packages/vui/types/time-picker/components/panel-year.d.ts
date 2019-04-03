import { Vue } from 'vue-property-decorator';
export default class MTimePickerPanelYear extends Vue {
    max: number;
    min: number;
    DateStore: any;
    onClick(year: number): void;
    RCols(): any;
    render(): JSX.Element;
}
