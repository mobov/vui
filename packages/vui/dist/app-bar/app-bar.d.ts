import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
declare const MAppBar_base: import("vue-class-component/lib/declarations").VueClass<colorable & elevated & sizeable & variable>;
export default class MAppBar extends MAppBar_base {
    render(): JSX.Element;
}
export {};
