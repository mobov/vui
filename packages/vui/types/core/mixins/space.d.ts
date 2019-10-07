import { Vue } from 'vue-property-decorator';
import { size } from '../constants';
declare module 'vue/types/vue' {
    interface Vue {
        margin?: SpaceSize;
        marginX?: SpaceSize;
        marginY?: SpaceSize;
        marginTop?: SpaceSize;
        marginBottom?: SpaceSize;
        marginLeft?: SpaceSize;
        marginRight?: SpaceSize;
        padding?: SpaceSize;
        paddingX?: SpaceSize;
        paddingY?: SpaceSize;
        paddingTop?: SpaceSize;
        paddingBottom?: SpaceSize;
        paddingLeft?: SpaceSize;
        paddingRight?: SpaceSize;
        spaceStyle: any;
        spaceMarginStyle: any;
        spacePaddingStyle: any;
    }
}
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        margin?: SpaceSize;
        marginX?: SpaceSize;
        marginY?: SpaceSize;
        marginTop?: SpaceSize;
        marginBottom?: SpaceSize;
        marginLeft?: SpaceSize;
        marginRight?: SpaceSize;
        padding?: SpaceSize;
        paddingX?: SpaceSize;
        paddingY?: SpaceSize;
        paddingTop?: SpaceSize;
        paddingBottom?: SpaceSize;
        paddingLeft?: SpaceSize;
        paddingRight?: SpaceSize;
    }
}
declare type SpaceSize = size | string | number | undefined;
declare type SpaceMarginStyles = {
    margin?: SpaceSize;
    marginX?: SpaceSize;
    marginY?: SpaceSize;
    marginTop?: SpaceSize;
    marginBottom?: SpaceSize;
    marginLeft?: SpaceSize;
    marginRight?: SpaceSize;
};
declare type SpacePaddingStyles = {
    padding?: SpaceSize;
    paddingX?: SpaceSize;
    paddingY?: SpaceSize;
    paddingTop?: SpaceSize;
    paddingBottom?: SpaceSize;
    paddingLeft?: SpaceSize;
    paddingRight?: SpaceSize;
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
    readonly spaceStyle: {
        padding?: SpaceSize;
        paddingX?: SpaceSize;
        paddingY?: SpaceSize;
        paddingTop?: SpaceSize;
        paddingBottom?: SpaceSize;
        paddingLeft?: SpaceSize;
        paddingRight?: SpaceSize;
        margin?: SpaceSize;
        marginX?: SpaceSize;
        marginY?: SpaceSize;
        marginTop?: SpaceSize;
        marginBottom?: SpaceSize;
        marginLeft?: SpaceSize;
        marginRight?: SpaceSize;
    };
    readonly spaceMarginStyle: SpaceMarginStyles;
    readonly spacePaddingStyle: SpacePaddingStyles;
}
export {};
