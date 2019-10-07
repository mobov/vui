/**
 * 时间选择器底部
 */
import { Vue } from 'vue-property-decorator';
import { color } from '../../core/constants';
export default class MTimePickerHandler extends Vue {
    color: color;
    onConfirm(): void;
    onCancel(): void;
    render(): JSX.Element;
}
