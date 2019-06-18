import { Vue } from 'vue-property-decorator';
import { elevation } from '../constant';
export default class ElevationMixin extends Vue {
    name: string;
    elevation: elevation | undefined;
    readonly elevationClass: {};
}
