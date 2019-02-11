import Vue from 'vue';
import { VARIETY } from '../constant';
export default Vue.extend({
    name: 'variegate',
    props: {
        variety: {
            type: String,
            default: VARIETY.normal
        }
    }
});
//# sourceMappingURL=variegate.js.map