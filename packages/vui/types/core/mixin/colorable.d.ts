import { Vue } from 'vue-property-decorator';
import { color } from '../constant';
export default class colorable extends Vue {
    fontColor: color | undefined;
    color: color | undefined;
}
