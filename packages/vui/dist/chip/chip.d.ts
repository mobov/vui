import { Vue } from 'vue-property-decorator';
export default class MChip extends Vue {
    private size;
    private color;
    private fontColor;
    private elevation;
    private variety;
    private shape;
    private closeable;
    private closeover;
    readonly styles: {};
    readonly classes: {
        [x: string]: boolean;
    };
    onClose(e: MouseEvent): void;
    onClick(e: MouseEvent): void;
    RMedia(): import("vue/types/vnode").VNode[] | undefined;
    RClose(): JSX.Element | undefined;
    render(): JSX.Element;
}
