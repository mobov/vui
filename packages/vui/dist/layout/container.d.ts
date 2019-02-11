import { Vue } from 'vue-property-decorator';
import { CreateElement, RenderContext } from 'vue';
export default class MContainer extends Vue {
    private id;
    private tag;
    render(h: CreateElement, { props, data, children }: RenderContext): import("vue/types/vnode").VNode;
}
