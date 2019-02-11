import colorable from '../core/mixin/colorable';
declare const MAvatar_base: import("vue-class-component/lib/declarations").VueClass<colorable & object & Record<never, any> & {
    size: string | number;
} & {
    elevation: number;
} & {
    variety: string;
} & {
    shape: string;
}>;
export default class MAvatar extends MAvatar_base {
    private src;
    updateSrc(val: string): void;
    private status;
    private curSrc;
    loadSuccess(): void;
    loadFailure(): void;
    render(): JSX.Element;
}
export {};
