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
    readonly classes: {
        [x: string]: boolean;
        'm--with-header': boolean;
        'm--with-footer': boolean;
        'm--with-left': boolean;
        'm--with-right': boolean;
    };
    readonly styles: {};
    isHeader: boolean;
    isFooter: boolean;
    isLeft: boolean;
    isRight: boolean;
    RHeader(): JSX.Element;
    RFooter(): JSX.Element;
    RLeft(): JSX.Element;
    RRight(): JSX.Element;
    render(): JSX.Element;
}
