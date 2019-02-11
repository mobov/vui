import { Vue } from 'vue-property-decorator';
import { Size } from '../../types/model';
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        select?: 'none' | 'single' | 'multi';
    }
}
export default class TableHead extends Vue {
    size?: Size;
    select?: 'none' | 'single' | 'multi';
    sortable?: boolean;
    sort?: () => boolean;
    TableCols: any;
    TableStore: any;
    private widthMap;
    updateSize(widthMap: any): void;
    handleSelectAll(): void;
    RCell(item: any, index: number): JSX.Element;
    RHead(): JSX.Element;
    RSlotHeadPrepend(): JSX.Element | undefined;
    RSlotHeadAppend(): JSX.Element | undefined;
    RSlotHeadExtra(): import("vue").VNode[] | undefined;
    render(): JSX.Element;
}
