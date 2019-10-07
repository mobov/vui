import { Vue } from 'vue-property-decorator';
export default class MAppBar extends Vue {
    name: string;
    enableMouseScroll: boolean;
    scrollKeep: boolean;
    readonly styles: any;
    readonly classes: any;
    private lastScrollVal;
    scrollTo(): void;
    handleWheel(e: any): void;
    handleScroll(): void;
    activated(): void;
    deactivated(): void;
    mounted(): void;
    beforeDestroy(): void;
    render(): JSX.Element;
}
