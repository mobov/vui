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
        [`m--block`]: boolean;
    };
    render(): JSX.Element;
}
export {};
