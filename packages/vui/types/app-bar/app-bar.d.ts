import mixBase from '../core/mixin/base';
import mixVariety from '../core/mixin/variety';
import mixShape from '../core/mixin/shape';
declare const MAppBar_base: import("vue-class-component/lib/declarations").VueClass<mixBase & mixVariety & mixShape>;
export default class MAppBar extends MAppBar_base {
    name: string;
    enableMouseScroll: boolean;
    scrollKeep: boolean;
    readonly styles: {
        size?: string | number | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        padding?: string | number | undefined;
        paddingX?: string | number | undefined;
        paddingY?: string | number | undefined;
        paddingTop?: string | number | undefined;
        paddingBottom?: string | number | undefined;
        paddingLeft?: string | number | undefined;
        paddingRight?: string | number | undefined;
        margin?: string | number | undefined;
        marginX?: string | number | undefined;
        marginY?: string | number | undefined;
        marginTop?: string | number | undefined;
        marginBottom?: string | number | undefined;
        marginLeft?: string | number | undefined;
        marginRight?: string | number | undefined;
    };
    readonly classes: {};
    private lastScrollVal;
    scrollTo(): void;
    handleWheel(e: any): void;
    handleScroll(): void;
    activated(): void;
    deactivated(): void;
    mounted(): void;
    beforeDestroy(): void;
    render(): JSX.Element;
}
export {};
