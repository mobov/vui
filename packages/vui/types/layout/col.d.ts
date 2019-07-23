import mixSpacePadding from '../core/mixin/space-padding';
import mixSpaceMargin from '../core/mixin/space-margin';
import mixElevation from '../core/mixin/elevation';
import mixSize from '../core/mixin/size';
declare const MCol_base: import("vue-class-component/lib/declarations").VueClass<mixSpacePadding & mixSpaceMargin & mixSize & mixElevation>;
export default class MCol extends MCol_base {
    name: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    readonly styles: {
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
