import { Vue } from 'vue-property-decorator';
import { Fill, size } from '../core/constant';
export default class MView extends Vue {
    fillHeader?: Fill;
    fillFooter?: Fill;
    headerSize?: size;
    footerSize?: size;
    leftSize?: size;
    rightSize?: size;
    headerIndex?: number;
    footerIndex?: number;
    leftIndex?: number;
    rightIndex?: number;
    private readonly classes;
    private readonly styles;
    private isHeader;
    private isFooter;
    private isLeft;
    private isRight;
    private RHeader;
    private RFooter;
    private RLeft;
    private RRight;
    private render;
}
