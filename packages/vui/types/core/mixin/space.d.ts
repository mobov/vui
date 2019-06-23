import mixSpaceMargin from './space-margin';
import mixSpacePadding from './space-padding';
declare const SpaceMixin_base: import("vue-class-component/lib/declarations").VueClass<mixSpaceMargin & mixSpacePadding>;
export default class SpaceMixin extends SpaceMixin_base {
    readonly spaceStyle: {
        padding?: string | undefined;
        paddingX?: string | undefined;
        paddingY?: string | undefined;
        paddingTop?: string | undefined;
        paddingBottom?: string | undefined;
        paddingLeft?: string | undefined;
        paddingRight?: string | undefined;
        margin?: string | undefined;
        marginX?: string | undefined;
        marginY?: string | undefined;
        marginTop?: string | undefined;
        marginBottom?: string | undefined;
        marginLeft?: string | undefined;
        marginRight?: string | undefined;
    };
}
export {};
