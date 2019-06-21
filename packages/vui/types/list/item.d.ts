import mixBase from '../core/mixin/base';
import { Size } from '../core/constant';
declare const MListItem_base: import("vue-class-component/lib/declarations").VueClass<mixBase>;
export default class MListItem extends MListItem_base {
    name: string;
    padding: Size.sm;
    divider: boolean;
    hover: boolean;
    onClick(e: MouseEvent): void;
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
        '--with-divider': boolean;
        '--with-hover': boolean;
    };
    render(): JSX.Element;
}
export {};
