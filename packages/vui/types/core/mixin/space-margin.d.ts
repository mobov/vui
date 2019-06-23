import { Vue } from 'vue-property-decorator';
import { size } from '../constant';
declare type SpaceSize = size | string | number | undefined;
declare type SpaceMarginStyles = {
    margin?: string;
    marginX?: string;
    marginY?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
};
export default class SpaceMarginMixin extends Vue {
    marginLeft: SpaceSize;
    marginRight: SpaceSize;
    marginTop: SpaceSize;
    marginBottom: SpaceSize;
    marginX: SpaceSize;
    marginY: SpaceSize;
    margin: SpaceSize;
    paddingLeft: SpaceSize;
    paddingRight: SpaceSize;
    paddingTop: SpaceSize;
    paddingBottom: SpaceSize;
    paddingX: SpaceSize;
    paddingY: SpaceSize;
    padding: SpaceSize;
    readonly spaceMarginStyle: SpaceMarginStyles;
}
export {};
