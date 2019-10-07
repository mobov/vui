import { Vue } from 'vue-property-decorator';
import { FlexAlign, FlexJustify, FlexWrap, FlexDirection } from '../core/constants';
export default class MFlex extends Vue {
    name: string;
    block: boolean;
    wrap: FlexWrap;
    justify: FlexJustify;
    align: FlexAlign;
    direction: FlexDirection;
    readonly styles: any;
    readonly classes: any;
    render(): JSX.Element;
}
