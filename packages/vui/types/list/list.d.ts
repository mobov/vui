import { Vue } from 'vue-property-decorator';
export default class MList extends Vue {
    name: string;
    title: String;
    titleDivider: boolean;
    onClick(e: MouseEvent): void;
    readonly styles: any;
    readonly classes: any;
    render(): JSX.Element;
}
