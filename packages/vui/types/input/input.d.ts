import { Vue } from 'vue-property-decorator';
export default class MInput extends Vue {
    name: string;
    value: boolean | number | string;
    label: boolean | number | string;
    checkedIcon: string;
    uncheckIcon: string;
    disabled: boolean;
    onInput(val: any): void;
    readonly styles: any;
    readonly classes: {
        'm--checked': boolean;
        'm--disabled': boolean;
    };
    readonly checked: boolean;
    handleClick(val: any): void;
    RRadio(): JSX.Element;
    RDefault(): JSX.Element;
    render(): JSX.Element;
}
