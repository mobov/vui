import colorable from '../core/mixin/colorable';
declare const MAppBar_base: import("vue-class-component/lib/declarations").VueClass<colorable & object & Record<never, any> & {
    elevation: number;
} & {
    size: string | number;
} & {
    variety: string;
}>;
export default class MAppBar extends MAppBar_base {
    render(): JSX.Element;
}
export {};
