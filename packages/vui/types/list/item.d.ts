import { Vue } from 'vue-property-decorator';
import { size } from '../core/constants';
export default class MListItem extends Vue {
    name: string;
    divider: boolean;
    hover: boolean;
    active: boolean;
    padding: size | string | number;
    onClick(e: MouseEvent): void;
    readonly styles: any;
    readonly classes: any;
    render(): JSX.Element;
}
