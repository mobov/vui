import { Vue } from 'vue-property-decorator';
import { color } from '../constants';
declare module 'vue/types/vue' {
    interface Vue {
        fontColor?: color | undefined;
        color?: color | undefined;
        colorStyle: any;
    }
}
export default class ColorMixin extends Vue {
    name: string;
    fontColor: color | undefined;
    color: color | undefined;
    readonly colorStyle: {};
}
