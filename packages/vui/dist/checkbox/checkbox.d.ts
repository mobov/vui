import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
declare const MCheckbox_base: import("vue-class-component/lib/declarations").VueClass<colorable & sizeable>;
export default class MCheckbox extends MCheckbox_base {
    private value;
    private label;
    private checkedIcon;
    private uncheckIcon;
    private incheckIcon;
    private disabled;
    onInput(val: any): void;
    private isArrayValue;
    private isArrayLabel;
    private isBooleanValue;
    readonly isCheck: boolean;
    handleClick(): void;
    RCheckbox(): JSX.Element;
    render(): JSX.Element;
}
export {};
