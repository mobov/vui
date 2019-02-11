import { Vue } from 'vue-property-decorator';
export default class MButton extends Vue {
    private size;
    private elevation;
    private color;
    private fontColor;
    private shape;
    private variety;
    private block;
    private icon;
    private loading;
    private handleClick;
    readonly styles: {};
    readonly classes: {
        [x: string]: boolean;
        'm--block': boolean;
    };
    private render;
}
