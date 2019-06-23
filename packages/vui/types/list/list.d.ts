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
        size?: string | number | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
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
    readonly classes: {
        '--with-title-divider': boolean;
    };
    render(): JSX.Element;
}
export {};
