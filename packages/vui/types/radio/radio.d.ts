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
        size?: string | number | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        margin?: string | undefined;
        marginX?: string | undefined;
        marginY?: string | undefined;
        marginTop?: string | undefined;
        marginBottom?: string | undefined;
        marginLeft?: string | undefined;
        marginRight?: string | undefined;
        padding?: string | undefined;
        paddingX?: string | undefined;
        paddingY?: string | undefined;
        paddingTop?: string | undefined;
        paddingBottom?: string | undefined;
        paddingLeft?: string | undefined;
        paddingRight?: string | undefined;
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
