import mixColor from '../core/mixin/color';
import mixSpaceMargin from '../core/mixin/space-margin';
import mixSpacePadding from '../core/mixin/space-padding';
import mixSize from '../core/mixin/size';
import mixElevation from '../core/mixin/elevation';
declare const MPanel_base: import("vue-class-component/lib/declarations").VueClass<mixColor & mixSpaceMargin & mixSpacePadding & mixSize & mixElevation>;
export default class MPanel extends MPanel_base {
    name: string;
    readonly classes: {};
    readonly styles: {
        margin?: string | number | undefined;
        marginX?: string | number | undefined;
        marginY?: string | number | undefined;
        marginTop?: string | number | undefined;
        marginBottom?: string | number | undefined;
        marginLeft?: string | number | undefined;
        marginRight?: string | number | undefined;
        size?: string | number | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        fontSize?: string | number | undefined;
    };
    readonly scrollerStyles: {
        padding?: string | number | undefined;
        paddingX?: string | number | undefined;
        paddingY?: string | number | undefined;
        paddingTop?: string | number | undefined;
        paddingBottom?: string | number | undefined;
        paddingLeft?: string | number | undefined;
        paddingRight?: string | number | undefined;
    };
    RHeader(): JSX.Element;
    RFooter(): JSX.Element;
    render(): JSX.Element;
}
export {};
