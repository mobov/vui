import { Vue } from 'vue-property-decorator';
import { shape } from '../constants';
declare module 'vue/types/vue' {
    interface Vue {
        shape?: shape;
        shapeClass: any;
    }
}
export default class ShapeMixin extends Vue {
    shape?: shape;
    readonly shapeClass: {};
}
