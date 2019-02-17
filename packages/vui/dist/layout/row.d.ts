import { CreateElement, RenderContext } from 'vue';
import { Vue } from 'vue-property-decorator';
import { size } from '../core/constant';
export default class MRow extends Vue {
    id?: string;
    tag: string;
    gutter?: size;
    cols?: number;
    render(h: CreateElement, { props, data, children }: RenderContext): import("vue").VNode;
}
