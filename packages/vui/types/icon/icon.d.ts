import { CreateElement, RenderContext } from 'vue';
import { Vue } from 'vue-property-decorator';
import { size } from '../core/constant';
export default class MIcon extends Vue {
    name: string;
    static register(data?: any): void;
    value: string;
    size: size | string | number;
    color: string;
    render(h: CreateElement, { props, data, children, listeners }: RenderContext): JSX.Element;
}
