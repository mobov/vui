import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
import shapeable from '../core/mixin/shapeable';
declare const MAvatar_base: import("vue-class-component/lib/declarations").VueClass<colorable & sizeable & elevated & variable & shapeable>;
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
