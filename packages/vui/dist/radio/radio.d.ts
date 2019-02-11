import { Vue } from 'vue-property-decorator';
export default class MRadio extends Vue {
    private size?;
    private fontColor;
    private color;
    private value;
    private label;
    private checkedIcon;
    private uncheckIcon;
    private disabled;
    private onInput;
    readonly isCheck: boolean;
    handleClick(val: any): void;
    RRadio(): JSX.Element;
    render(): JSX.Element;
}
