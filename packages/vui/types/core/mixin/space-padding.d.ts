import { Vue } from 'vue-property-decorator';
import { size } from '../constant';
declare type SpaceSize = size | string | number | undefined;
declare type SpacePaddingStyles = {
    padding?: SpaceSize;
    paddingX?: SpaceSize;
    paddingY?: SpaceSize;
    paddingTop?: SpaceSize;
    paddingBottom?: SpaceSize;
    paddingLeft?: SpaceSize;
    paddingRight?: SpaceSize;
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
