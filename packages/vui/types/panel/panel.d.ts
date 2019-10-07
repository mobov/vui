import mixColor from '../core/mixins/color';
import mixSpaceMargin from '../core/mixins/space';
import mixSize from '../core/mixins/size';
import mixElevation from '../core/mixins/elevation';
declare const MPanel_base: import("vue-class-component/lib/declarations").VueClass<mixColor & mixSpaceMargin & mixSize & mixElevation>;
export default class MPanel extends MPanel_base {
    name: string;
    readonly classes: any;
    readonly styles: any;
    readonly scrollerStyles: any;
    RHeader(): JSX.Element;
    RFooter(): JSX.Element;
    render(): JSX.Element;
}
export {};
