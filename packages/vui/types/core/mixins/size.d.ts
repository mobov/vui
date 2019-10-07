import { Vue } from 'vue-property-decorator';
import { size } from '../constants';
declare module 'vue/types/vue' {
    interface Vue {
        size?: size | string | number;
        height?: string | number;
        width?: string | number;
        maxHeight?: string | number;
        maxWidth?: string | number;
        minHeight?: string | number;
        minWidth?: string | number;
        fontSize?: string | number;
        sizeStyle: any;
    }
}
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        size?: size | string | number;
        height?: string | number;
        width?: string | number;
        maxHeight?: string | number;
        maxWidth?: string | number;
        minHeight?: string | number;
        minWidth?: string | number;
        fontSize?: string | number;
    }
}
declare type SizeStyles = {
    size?: size | string | number;
    height?: string | number;
    width?: string | number;
    maxHeight?: string | number;
    maxWidth?: string | number;
    minHeight?: string | number;
    minWidth?: string | number;
    fontSize?: string | number;
};
export default class SizeMixin extends Vue {
    name: string;
    size?: string | number;
    height?: string | number;
    width?: string | number;
    minHeight?: string | number;
    minWidth?: string | number;
    maxHeight?: string | number;
    maxWidth?: string | number;
    fontSize?: size | string | number;
    readonly sizeStyle: SizeStyles;
}
export {};
