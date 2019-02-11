import { CreateElement, RenderContext } from 'vue';
import { Vue } from 'vue-property-decorator';
export default class MRow extends Vue {
    private id?;
    private tag;
    private wrap;
    private justify;
    private align;
    private gutter?;
    private cols?;
    render(h: CreateElement, { props, data, children }: RenderContext): import("vue/types/vnode").VNode;
}
