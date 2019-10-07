import { Vue } from 'vue-property-decorator';
import { size } from '../core/constants';
export default class MIcon extends Vue {
    name: string;
    value: string;
    size: size | string | number;
    static register(data?: any): void;
    render(): JSX.Element;
}
