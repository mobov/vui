import mixColor from './color';
import mixSize from './size';
import mixSpace from './space';
import mixElevation from './elevation';
declare const BaseMixin_base: import("vue-class-component/lib/declarations").VueClass<mixColor & mixSize & mixSpace & mixElevation>;
export default class BaseMixin extends BaseMixin_base {
    readonly baseStyle: {
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
    readonly baseClass: {};
}
export {};
