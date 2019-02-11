import { Vue } from 'vue-property-decorator';
export default class MCheckbox extends Vue {
    private size?;
    private color;
    private fontColor;
    private value;
    private label;
    private checkedIcon;
    private uncheckIcon;
    private incheckIcon;
    private disabled;
    private isArrayValue;
    private isArrayLabel;
    private isBooleanValue;
    readonly classes: {
        'm--disabled': boolean;
        'm--checked': boolean;
    };
    readonly styles: {};
    readonly isCheck: boolean;
    onInput(val: any): void;
    handleClick(): void;
    RCheckbox(): JSX.Element;
    render(): JSX.Element;
}
