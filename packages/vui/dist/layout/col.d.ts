import { Vue } from 'vue-property-decorator';
import { CreateElement, RenderContext } from 'vue';
export default class MCol extends Vue {
    id?: string;
    tag: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    render(h: CreateElement, { props, data, children }: RenderContext): import("vue").VNode;
}
