import { CreateElement, RenderContext, VNode } from 'vue';
import { Vue } from 'vue-property-decorator';
export default class MTransitionExpansion extends Vue {
    render(h: CreateElement, { props, data, children }: RenderContext): VNode;
}
