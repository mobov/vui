import { Vue } from 'vue-property-decorator';
export default class MCol extends Vue {
    name: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    readonly styles: {};
    readonly classes: any;
    render(): JSX.Element;
}
