import { Vue } from 'vue-property-decorator';
import { size, color, align } from '../core/constant';
export declare const compName = "m-table-col";
export default class MTableCol extends Vue {
    type?: 'normal' | 'select' | 'expand';
    title?: string;
    width?: size;
    field?: string;
    align?: align;
    color?: color;
    sort?: () => boolean;
    sortable?: boolean;
}
