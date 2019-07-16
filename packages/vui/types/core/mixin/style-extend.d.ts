import { Vue } from 'vue-property-decorator';
import { size } from '../constant';
export default class SizeMixin extends Vue {
    name: string;
    size?: size | string | number;
    minHeight?: string | number;
    minWidth?: string | number;
    height?: string | number;
    width?: string | number;
    maxHeight?: string | number;
    maxWidth?: string | number;
    fontSize?: size | string | number;
    private readonly sizeStyle;
    beforeMount(): void;
}
