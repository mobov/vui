import { Vue } from 'vue-property-decorator';
export default class MAvatar extends Vue {
    name: string;
    transition: boolean;
    placeholder: string;
    src: string;
    readonly styles: any;
    readonly classes: any;
    updateSrc(val: string): void;
    status: number;
    curSrc: string;
    loadSuccess(): void;
    loadFailure(): void;
    render(): JSX.Element;
}
