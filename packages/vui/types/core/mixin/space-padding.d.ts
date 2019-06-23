import { Vue } from 'vue-property-decorator';
import { size } from '../constant';
declare type SpaceSize = size | string | number | undefined;
declare type SpacePaddingStyles = {
    padding?: string;
    paddingX?: string;
    paddingY?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
};
export default class SpacePaddingMixin extends Vue {
    paddingLeft: SpaceSize;
    paddingRight: SpaceSize;
    paddingTop: SpaceSize;
    paddingBottom: SpaceSize;
    paddingX: SpaceSize;
    paddingY: SpaceSize;
    padding: SpaceSize;
    readonly spacePaddingStyle: SpacePaddingStyles;
}
export {};
