import { Vue } from 'vue-property-decorator';
import { size } from '../../core/constants';
import { typeSelect } from '../constant';
export default class TableBody extends Vue {
    height?: string;
    border?: boolean;
    noHeader?: boolean;
    size?: size;
    rowSelect?: boolean;
    rowExpand?: boolean;
    select?: typeSelect;
    expand?: typeSelect;
    TableCols: any[];
    TableStore: any;
    noHeaderToggle(val: string): void;
    readonly selectable: boolean;
    readonly expandable: boolean;
    readonly styles: {
        height: string | boolean | undefined;
    };
    handleRowClick(row: any, index: number): void;
    handleRowSelect(row: any, index: number): void;
    handleRowExpand(row: any, index: number): void;
    RCols(row: any, index: number): any;
    RRow(row: any, index: number): JSX.Element;
    RExpand(row: any, index: number): JSX.Element | undefined;
    RTBody(): JSX.Element;
    updateDom(): void;
    mounted(): void;
    updated(): void;
    beforeDestroy(): void;
    render(): JSX.Element;
}
