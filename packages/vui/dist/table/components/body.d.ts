import { Vue } from 'vue-property-decorator';
import { Size } from '../../types/model';
export default class TableBody extends Vue {
    height?: string;
    border?: boolean;
    noHeader?: boolean;
    size?: Size;
    rowSelect?: boolean;
    rowExpand?: boolean;
    select?: 'none' | 'single' | 'multi';
    expand?: 'none' | 'single' | 'multi';
    TableCols: any;
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
    onDomUpdate(): void;
    mounted(): void;
    updated(): void;
    beforeDestroy(): void;
    render(): JSX.Element;
}
