import color from '../core/mixin/color';
import size from '../core/mixin/size';
import space from '../core/mixin/space';
declare const MCheckbox_base;
export default class MCheckbox extends MCheckbox_base {
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
    readonly styles: {};
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
