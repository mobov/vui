import { Vue } from 'vue-property-decorator';
export default class MView extends Vue {
    private fillHeader?;
    private fillFooter?;
    private headerSize?;
    private footerSize?;
    private leftSize?;
    private rightSize?;
    private headerIndex?;
    private footerIndex?;
    private leftIndex?;
    private rightIndex?;
    private isHeader;
    private isFooter;
    private isLeft;
    private isRight;
    readonly classes: {
        [x: string]: boolean;
        'm--with-header': boolean;
        'm--with-footer': boolean;
        'm--with-left': boolean;
        'm--with-right': boolean;
    };
    readonly styles: {};
    RHeader(): JSX.Element;
    RFooter(): JSX.Element;
    RLeft(): JSX.Element;
    RRight(): JSX.Element;
    render(): JSX.Element;
}
