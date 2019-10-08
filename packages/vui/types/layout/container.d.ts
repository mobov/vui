import { Vue } from 'vue-property-decorator';
export default class MContaiber extends Vue {
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
