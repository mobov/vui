import color from '../core/mixin/color';
import size from '../core/mixin/size';
declare const MRadio_base;
export default class MRadio extends MRadio_base {
    value: boolean | number | string;
    label: boolean | number | string;
    checkedIcon: string;
    uncheckIcon: string;
    disabled: boolean;
    onInput(val: any): void;
    readonly styles: {};
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
