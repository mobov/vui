import { Vue } from 'vue-property-decorator';
import { shape } from '../constant';
export default class ShapeMixin extends Vue {
    shape?: shape;
    readonly shapeClass: {};
}
