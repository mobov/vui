import Vue from 'vue';
import { VARIETY } from '../constant';
export default Vue.extend({
    name: 'variable',
    props: {
        variety: {
            type: String,
            default: VARIETY.normal
        }
    }
});
//# sourceMappingURL=variable.js.map