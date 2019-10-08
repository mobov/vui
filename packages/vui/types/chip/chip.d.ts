import { Vue } from 'vue-property-decorator';
import '../icon/icons/cancel';
export default class MChip extends Vue {
    name: string;
    closeable: boolean;
    closeover: boolean;
    onClose(e: MouseEvent): void;
    onClick(e: MouseEvent): void;
    readonly styles: any;
    readonly classes: any;
    RMedia(): import("vue").VNode[];
    RClose(): JSX.Element;
    render(): JSX.Element;
}
