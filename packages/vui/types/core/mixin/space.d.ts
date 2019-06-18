import { Vue } from 'vue-property-decorator';
import { size } from '../constant';
declare type SpaceSize = size | string | number | undefined;
declare type SpaceStyles = {
    margin?: string;
    marginX?: string;
    marginY?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    padding?: string;
    paddingX?: string;
    paddingY?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
};
export default class SpaceMixin extends Vue {
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
    readonly spaceStyle: SpaceStyles;
}
export {};
