import { Vue } from 'vue-property-decorator';
import { CreateElement, RenderContext } from 'vue';
export default class MCol extends Vue {
    private id;
    private tag;
    private xs;
    private sm;
    private md;
    private lg;
    private xl;
    private gutter;
    render(h: CreateElement, { props, data, children }: RenderContext): import("vue/types/vnode").VNode;
}
