import mixColor from './color';
import mixSize from './size';
import mixSpace from './space';
import mixElevation from './elevation';
import mixBorder from './border';
declare const BaseMixin_base: import("vue-class-component/lib/declarations").VueClass<mixColor & mixSize & mixSpace & mixElevation & mixBorder>;
export default class BaseMixin extends BaseMixin_base {
    readonly baseStyle: {
        border?: string | undefined;
        borderLeft?: string | undefined;
        borderRight?: string | undefined;
        borderTop?: string | undefined;
        borderBottom?: string | undefined;
        size?: string | number | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        fontSize?: string | number | undefined;
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
    readonly baseClass: {};
}
export {};
