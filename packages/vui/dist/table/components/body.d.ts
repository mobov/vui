import { Vue } from 'vue-property-decorator';
export default class TableBody extends Vue {
    private height;
    private border;
    private noHeader;
    private size;
    private rowSelect;
    private rowExpand;
    private select;
    private expand;
    private TableCols;
    private TableStore;
    noHeaderToggle(val: string): void;
    readonly selectable: boolean;
    readonly expandable: boolean;
    readonly styles: {
        height: string | boolean;
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
