import { Vue } from 'vue-property-decorator';
import { typeSelect } from '../constant';
import { size } from '../../core/constants';
export default class TableHead extends Vue {
    size?: size;
    select?: typeSelect;
    sortable?: boolean;
    sort?: () => boolean;
    TableCols: any;
    TableStore: any;
    private widthMap;
    updateSize(widthMap: any): void;
    handleSelectAll(): void;
    RCell(item: any, index: number): JSX.Element;
    RHead(): JSX.Element;
    RSlotHeadPrepend(): JSX.Element;
    RSlotHeadAppend(): JSX.Element;
    RSlotHeadExtra(): import("vue").VNode[];
    render(): JSX.Element;
}
