import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
import shapeable from '../core/mixin/shapeable';
declare const MButton_base: import("vue-class-component/lib/declarations").VueClass<colorable & sizeable & elevated & variable & shapeable>;
export default class MButton extends MButton_base {
    block: boolean;
    icon: string;
    loading: boolean;
    onClick(e: MouseEvent | TouchEvent): void;
    render(): JSX.Element;
}
export {};
