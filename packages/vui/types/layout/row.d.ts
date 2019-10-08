import { Vue } from 'vue-property-decorator';
export default class MRow extends Vue {
    name: string;
    cols?: number;
    gutter?: number | string;
    readonly styles: any;
    readonly classes: any;
    render(): JSX.Element;
}
