import { Vue } from 'vue-property-decorator';
import { placement } from '../constants';
declare module 'vue/types/vue' {
    interface Vue {
        visible?: boolean;
        initPopper?: any;
        updatePopper?: any;
        popperVM?: any;
        popperStyle?: any;
    }
}
export default class PopperMixin extends Vue {
    placement?: placement;
    offset?: number;
    value?: boolean;
    visibleArrow?: boolean;
    transition?: boolean;
    disabled: boolean;
    trigger: 'hover' | 'click';
    showDelay: number;
    hideDelay: number;
    options?: any;
    popperId: string;
    popperJS: any;
    popperVM: any;
    $popper: any;
    $reference: any;
    whenVisibleUpdate(val: boolean): void;
    visible: boolean;
    isMouseOver: boolean;
    zIndex: number;
    readonly popperStyle: {
        zIndex: number;
    };
    readonly popperOptions: any;
    initPopper(): void;
    createPopper(): void;
    updatePopper(): void;
    destroyPopper(): void;
    debounceHide: any;
    show(): void;
    hide(): void;
    toggle(): void;
    handleDocumentClick(e: Event): void;
    handleHide(): void;
    mounted(): void;
    beforeDestroy(): void;
    deactivated(): void;
}
