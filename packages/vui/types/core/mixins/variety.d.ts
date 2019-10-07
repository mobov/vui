import { Vue } from 'vue-property-decorator';
import { variety } from '../constants';
declare module 'vue/types/vue' {
    interface Vue {
        variety?: variety;
        varietyClass?: any;
    }
}
export default class VarietyMixin extends Vue {
    variety?: variety;
    readonly varietyClass: {};
}
