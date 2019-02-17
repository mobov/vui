import { Vue } from 'vue-property-decorator';
import { shape } from '../constant';
export default class shapeable extends Vue {
    shape: shape | undefined;
}
