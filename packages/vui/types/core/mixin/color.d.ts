import { Vue } from 'vue-property-decorator';
import { color } from '../constant';
export default class ColorMixin extends Vue {
    name: string;
    fontColor: color | undefined;
    color: color | undefined;
    readonly colorStyle: {};
}
