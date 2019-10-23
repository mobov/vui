import { Vue } from 'vue-property-decorator';
export default class MModal extends Vue {
    name: string;
    value?: boolean;
    modalId: string;
    readonly styles: any;
    readonly classes: any;
    RPopover(): JSX.Element;
    beforeCreate(): void;
    render(): JSX.Element;
}
