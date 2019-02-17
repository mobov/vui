import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
declare const MCheckbox_base: import("vue-class-component/lib/declarations").VueClass<colorable & sizeable>;
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
    render(): JSX.Element;
}
export {};
