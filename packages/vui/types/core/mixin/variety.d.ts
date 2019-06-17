import { Vue } from 'vue-property-decorator';
import { variety } from '../constant';
export default class VarietyMixin extends Vue {
    variety?: variety;
    readonly varietyClass: {};
}
