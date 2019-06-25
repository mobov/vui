import mixSpaceMargin from './space-margin';
import mixSpacePadding from './space-padding';
declare const SpaceMixin_base: import("vue-class-component/lib/declarations").VueClass<mixSpaceMargin & mixSpacePadding>;
export default class SpaceMixin extends SpaceMixin_base {
    readonly spaceStyle: {
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
}
export {};
