import { Vue } from 'vue-property-decorator';
export default class MContainer extends Vue {
    name: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    readonly styles: any;
    readonly classes: any;
    render(): JSX.Element;
}
