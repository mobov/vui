import mixBase from '../core/mixin/base';
declare const MCheckbox_base: import("vue-class-component/lib/declarations").VueClass<mixBase>;
export default class MCheckbox extends MCheckbox_base {
    name: string;
    value: any;
    label: any;
    checkedIcon: string;
    uncheckIcon: string;
    incheckIcon: string;
    disabled: boolean;
    onInput(val: any): void;
    isArrayValue: boolean;
    isArrayLabel: boolean;
    isBooleanValue: boolean;
    readonly styles: {
        size?: string | number | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        padding?: string | undefined;
        paddingX?: string | undefined;
        paddingY?: string | undefined;
        paddingTop?: string | undefined;
        paddingBottom?: string | undefined;
        paddingLeft?: string | undefined;
        paddingRight?: string | undefined;
        margin?: string | undefined;
        marginX?: string | undefined;
        marginY?: string | undefined;
        marginTop?: string | undefined;
        marginBottom?: string | undefined;
        marginLeft?: string | undefined;
        marginRight?: string | undefined;
    };
    readonly classes: {
        'm--checked': boolean;
        'm--disabled': boolean;
    };
    readonly checked: boolean;
    handleClick(): void;
    RCheckbox(): JSX.Element;
    RDefault(): JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
