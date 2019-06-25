import mixBase from '../core/mixin/base';
import mixShape from '../core/mixin/shape';
import { FlexAlign, FlexJustify, FlexWrap, FlexDirection } from '../core/constant';
declare const MFlex_base: import("vue-class-component/lib/declarations").VueClass<mixBase & mixShape>;
export default class MFlex extends MFlex_base {
    name: string;
    id?: string;
    tag: string;
    block: boolean;
    wrap: FlexWrap;
    justify: FlexJustify;
    align: FlexAlign;
    direction: FlexDirection;
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
        [`m--block`]: boolean;
    };
    render(): JSX.Element;
}
export {};
