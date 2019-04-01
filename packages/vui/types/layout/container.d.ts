import { Vue } from 'vue-property-decorator';
import { CreateElement, RenderContext } from 'vue';
export default class MContainer extends Vue {
    id: string;
    tag: string;
    render(h: CreateElement, { props, data, children }: RenderContext): import("vue").VNode;
}
