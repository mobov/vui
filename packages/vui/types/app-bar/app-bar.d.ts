import mixBase from '../core/mixin/base';
import mixVariety from '../core/mixin/variety';
import mixShape from '../core/mixin/shape';
declare const MAppBar_base: import("vue-class-component/lib/declarations").VueClass<mixBase & mixVariety & mixShape>;
export default class MAppBar extends MAppBar_base {
    name: string;
    readonly styles: {
        size?: string | number | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        margin?: string | undefined;
        marginX?: string | undefined;
        marginY?: string | undefined;
        marginTop?: string | undefined;
        marginBottom?: string | undefined;
        marginLeft?: string | undefined;
        marginRight?: string | undefined;
        padding?: string | undefined;
        paddingX?: string | undefined;
        paddingY?: string | undefined;
        paddingTop?: string | undefined;
        paddingBottom?: string | undefined;
        paddingLeft?: string | undefined;
        paddingRight?: string | undefined;
    };
    readonly classes: {};
    handleWheel(e: any): void;
    handleScroll(e: any): void;
    render(): JSX.Element;
}
export {};
