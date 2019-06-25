import { Vue } from 'vue-property-decorator';
declare type borderType = string | boolean;
declare type BorderStyles = {
    border?: string;
    borderLeft?: string;
    borderRight?: string;
    borderTop?: string;
    borderBottom?: string;
};
export default class BorderMixin extends Vue {
    border: borderType;
    borderLeft: borderType;
    borderRight: borderType;
    borderTop: borderType;
    borderBottom: borderType;
    readonly borderStyle: BorderStyles;
}
export {};
