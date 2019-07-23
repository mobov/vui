import mixSpacePadding from '../core/mixin/space-padding';
import mixSpaceMargin from '../core/mixin/space-margin';
import mixElevation from '../core/mixin/elevation';
import mixSize from '../core/mixin/size';
declare const MRow_base: import("vue-class-component/lib/declarations").VueClass<mixSpacePadding & mixSpaceMargin & mixSize & mixElevation>;
export default class MRow extends MRow_base {
    name: string;
    cols?: number;
    readonly styles: {
        size?: string | number | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        fontSize?: string | number | undefined;
        margin?: string | number | undefined;
        marginX?: string | number | undefined;
        marginY?: string | number | undefined;
        marginTop?: string | number | undefined;
        marginBottom?: string | number | undefined;
        marginLeft?: string | number | undefined;
        marginRight?: string | number | undefined;
        padding?: string | number | undefined;
        paddingX?: string | number | undefined;
        paddingY?: string | number | undefined;
        paddingTop?: string | number | undefined;
        paddingBottom?: string | number | undefined;
        paddingLeft?: string | number | undefined;
        paddingRight?: string | number | undefined;
    };
    readonly classes: {};
    render(): JSX.Element;
}
export {};
