import mixBase from '../core/mixin/base';
import { Size } from '../core/constant';
declare const MList_base: import("vue-class-component/lib/declarations").VueClass<mixBase>;
export default class MList extends MList_base {
    name: string;
    title: String;
    titleDivider: boolean;
    marginY: Size.sm;
    onClick(e: MouseEvent): void;
    readonly styles: {
        border?: string | undefined;
        borderLeft?: string | undefined;
        borderRight?: string | undefined;
        borderTop?: string | undefined;
        borderBottom?: string | undefined;
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
        '--with-title-divider': boolean;
    };
    render(): JSX.Element;
}
export {};
