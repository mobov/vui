import { Vue } from 'vue-property-decorator';
export default class MButton extends Vue {
    name: string;
    block: boolean;
    loading: boolean;
    disabled: boolean;
    onClick(e: MouseEvent | TouchEvent): void;
    readonly styles: any;
    readonly classes: any;
    handleClick(e: any): void;
    render(): JSX.Element;
}
