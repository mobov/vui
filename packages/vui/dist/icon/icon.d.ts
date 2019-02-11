import { CreateElement, RenderContext } from 'vue';
import { Vue } from 'vue-property-decorator';
export default class MIcon extends Vue {
    private name;
    private size;
    private color;
    static register(data?: any): void;
    render(h: CreateElement, { props, data, children, listeners }: RenderContext): JSX.Element;
}
