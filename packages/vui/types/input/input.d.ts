import { Vue } from 'vue-property-decorator';
export default class MInput extends Vue {
    name: string;
    value: number | string;
    label: boolean | number | string;
    disabled: boolean;
    type: number | string;
    placeholder: number | string;
    onInput(val: any): void;
    onChange(val: any): void;
    readonly styles: any;
    readonly classes: {
        'm--checked': boolean;
        'm--disabled': boolean;
    };
    readonly checked: boolean;
    handleClick(val: any): void;
    RDefault(): JSX.Element;
    render(): JSX.Element;
}
