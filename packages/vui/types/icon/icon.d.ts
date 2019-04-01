import { CreateElement, RenderContext } from 'vue';
import { Vue } from 'vue-property-decorator';
import { size } from '../core/constant';
export declare function register(data?: any): void;
export default class MIcon extends Vue {
    name: string;
    size: size | string | number;
    color: string;
    render(h: CreateElement, { props, data, children, listeners }: RenderContext): JSX.Element;
}
