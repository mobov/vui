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
        border?: string | undefined;
        borderLeft?: string | undefined;
        borderRight?: string | undefined;
        borderTop?: string | undefined;
        borderBottom?: string | undefined;
        size?: string | number | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        padding?: string | number | undefined;
        paddingX?: string | number | undefined;
        paddingY?: string | number | undefined;
        paddingTop?: string | number | undefined;
        paddingBottom?: string | number | undefined;
        paddingLeft?: string | number | undefined;
        paddingRight?: string | number | undefined;
        margin?: string | number | undefined;
        marginX?: string | number | undefined;
        marginY?: string | number | undefined;
        marginTop?: string | number | undefined;
        marginBottom?: string | number | undefined;
        marginLeft?: string | number | undefined;
        marginRight?: string | number | undefined;
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
