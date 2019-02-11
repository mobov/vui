import { Vue } from 'vue-property-decorator';
export default class TableHead extends Vue {
    private TableCols;
    private TableStore;
    private size;
    private select;
    private sortable?;
    private sort?;
    private widthMap;
    updateSize(widthMap: any): void;
    handleSelectAll(): void;
    RCell(item: any, index: number): JSX.Element;
    RHead(): JSX.Element;
    RSlotHeadPrepend(): JSX.Element | undefined;
    RSlotHeadAppend(): JSX.Element | undefined;
    RSlotHeadExtra(): import("vue/types/vnode").VNode[] | undefined;
    render(): JSX.Element;
}
