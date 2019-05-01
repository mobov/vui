import { CreateElement, RenderContext, VNode } from 'vue';
import { Vue } from 'vue-property-decorator';
import { TransitionName } from '../core/constant';
export default class MTransition extends Vue {
    name?: TransitionName;
    render(h: CreateElement, { props, data, children, listeners }: RenderContext): VNode;
}
