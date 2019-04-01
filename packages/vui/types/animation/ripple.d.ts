import { DirectiveOptions } from 'vue';
import './ripple.scss';
declare global {
    interface Element {
        getElementsByClassName(classNames: string): NodeListOf<HTMLElement>;
    }
    interface HTMLElement {
        _ripple: undefined | {
            enabled?: boolean;
            centered?: boolean;
            class?: string;
        };
    }
}
declare const MRipple: DirectiveOptions;
export default MRipple;
