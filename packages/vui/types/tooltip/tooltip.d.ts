import { Vue } from 'vue-property-decorator';
export default class MTooltip extends Vue {
    name: string;
    value?: boolean;
    content: string;
    emitShow(e: MouseEvent): void;
    emitHide(e: MouseEvent): void;
    popperId: string;
    readonly styles: any;
    readonly classes: any;
    RTooltip(): JSX.Element;
    beforeCreate(): void;
    render(): any;
}
