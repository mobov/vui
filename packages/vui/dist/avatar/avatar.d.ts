import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
import shapeable from '../core/mixin/shapeable';
declare const MAvatar_base: import("vue-class-component/lib/declarations").VueClass<colorable & sizeable & elevated & variable & shapeable>;
export default class MAvatar extends MAvatar_base {
    src: string;
    readonly styles: {};
    readonly classes: {
        [x: string]: boolean;
    };
    updateSrc(val: string): void;
    status: number;
    curSrc: string;
    loadSuccess(): void;
    loadFailure(): void;
    render(): JSX.Element;
}
export {};
