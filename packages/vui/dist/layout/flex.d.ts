import { CreateElement, RenderContext } from 'vue';
import { Vue } from 'vue-property-decorator';
import { FlexAlign, FlexJustify, FlexWrap } from '../core/constant';
export default class MFlex extends Vue {
    id?: string;
    tag: string;
    inline: boolean;
    wrap: FlexWrap;
    justify: FlexJustify;
    align: FlexAlign;
    render(h: CreateElement, { props, data, children }: RenderContext): import("vue").VNode;
}
