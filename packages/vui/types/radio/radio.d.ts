import mixBase from '../core/mixin/base';
declare const MRadio_base: import("vue-class-component/lib/declarations").VueClass<mixBase>;
export default class MRadio extends MRadio_base {
    name: string;
    value: boolean | number | string;
    label: boolean | number | string;
    checkedIcon: string;
    uncheckIcon: string;
    disabled: boolean;
    onInput(val: any): void;
    readonly styles: {
        border?: string | undefined;
        borderLeft?: string | undefined;
        borderRight?: string | undefined;
        borderTop?: string | undefined;
        borderBottom?: string | undefined;
        size?: string | number | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        fontSize?: string | number | undefined;
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
    handleClick(val: any): void;
    RRadio(): JSX.Element;
    RDefault(): JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
