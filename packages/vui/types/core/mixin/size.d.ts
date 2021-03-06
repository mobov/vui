import { Vue } from 'vue-property-decorator';
import { size } from '../constant';
declare type SizeStyles = {
    size?: size | string | number;
    height?: string | number;
    width?: string | number;
    fontSize?: string | number;
};
export default class SizeMixin extends Vue {
    name: string;
    size?: size | string | number;
    height?: string | number;
    width?: string | number;
    fontSize?: size | string | number;
    readonly sizeStyle: SizeStyles;
}
export {};
