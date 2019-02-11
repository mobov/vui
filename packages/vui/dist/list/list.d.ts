import { Vue } from 'vue-property-decorator';
export default class MList extends Vue {
    private size;
    private mode;
    private color;
    private disableRipple;
    onClick(e: MouseEvent): void;
    readonly styles: {};
    render(): JSX.Element;
}
