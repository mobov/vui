import { Vue } from 'vue-property-decorator';
export default class MPopover extends Vue {
    name: string;
    value?: boolean;
    content: string;
    trigger: 'hover' | 'click' | 'toggle';
    popperId: string;
    readonly styles: any;
    readonly classes: any;
    RPopover(): JSX.Element;
    beforeCreate(): void;
    render(): any;
}
