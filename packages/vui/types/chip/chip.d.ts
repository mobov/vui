import '../icon/icons/cancel';
import mixBase from '../core/mixin/base';
import mixVariety from '../core/mixin/variety';
import mixShape from '../core/mixin/shape';
declare const MChip_base;
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
    readonly classes: {
        'm--closeable': boolean;
        'm--closeover': boolean;
    };
    RMedia(): import("vue").VNode[] | undefined;
    RClose(): JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
