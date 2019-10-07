import { Vue } from 'vue-property-decorator';
declare type borderType = string | boolean;
declare type BorderStyles = {
    border?: string;
    borderLeft?: string;
    borderRight?: string;
    borderTop?: string;
    borderBottom?: string;
};
declare module 'vue/types/vue' {
    interface Vue {
        borderStyle: any;
    }
}
export default class BorderMixin extends Vue {
    border: borderType;
    borderLeft: borderType;
    borderRight: borderType;
    borderTop: borderType;
    borderBottom: borderType;
    readonly borderStyle: BorderStyles;
}
export {};
