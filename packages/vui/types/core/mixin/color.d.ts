import VuiComponent from '../vuiComponent';
import { color } from '../constant';
export default class ColorMixin extends VuiComponent {
    fontColor: color | undefined;
    color: color | undefined;
    readonly colorStyle: {};
}
