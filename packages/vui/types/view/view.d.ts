import { Vue } from 'vue-property-decorator';
export default class MView extends Vue {
    name: string;
    scrollKeep: boolean;
    onRefresh?: () => {};
    onLoadMore?: () => {};
    onScroll(params: [Event, number, boolean, boolean, '↕' | '↓' | '↑']): void;
    readonly classes: any;
    readonly styles: any;
    readonly scrollerStyles: any;
    private enableWatchScroll;
    private enableLoadMore;
    private enableRefresh;
    private pending;
    private isStart;
    private isEnd;
    private lastScrollVal;
    private scrollKeepVal;
    handleScroll(e: Event): void;
    refresh(): void;
    loadMore(): void;
    scrollTo(target: any): void;
    mounted(): void;
    activated(): void;
    deactivated(): void;
    beforeDestroy(): void;
    render(): JSX.Element;
}
