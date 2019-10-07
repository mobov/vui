import { Vue } from 'vue-property-decorator';
import { elevation } from '../constants';
declare module 'vue/types/vue' {
    interface Vue {
        elevation?: elevation | undefined;
        elevationClass: any;
    }
}
export default class ElevationMixin extends Vue {
    elevation: elevation | undefined;
    readonly elevationClass: {};
}
