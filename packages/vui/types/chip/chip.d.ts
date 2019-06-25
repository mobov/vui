import '../icon/icons/cancel';
import mixBase from '../core/mixin/base';
import mixVariety from '../core/mixin/variety';
import mixShape from '../core/mixin/shape';
declare const MChip_base: import("vue-class-component/lib/declarations").VueClass<mixBase & mixVariety & mixShape>;
export default class MChip extends MChip_base {
    name: string;
    closeable: boolean;
    closeover: boolean;
    onClose(e: MouseEvent): void;
    onClick(e: MouseEvent): void;
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
    readonly classes: {
        'm--closeable': boolean;
        'm--closeover': boolean;
    };
    RMedia(): import("vue").VNode[] | undefined;
    RClose(): JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
