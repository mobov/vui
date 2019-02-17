import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Size } from '../core/constant';
const compName = 'm-icon';
const SIZE = {
    xs: 12,
    sm: 24,
    md: 32,
    lg: 40,
    xl: 50
};
const Icons = {};
export function register(data = {}) {
    for (const item in data) {
        if (data.hasOwnProperty(item)) {
            const icon = data[item];
            if (icon.d) {
                if (!icon.paths) {
                    icon.paths = [];
                }
                icon.paths.push({ d: icon.d });
            }
            if (icon.points) {
                if (!icon.polygons) {
                    icon.polygons = [];
                }
                icon.polygons.push({ points: icon.points });
            }
            Icons[item] = icon;
        }
    }
}
let MIcon = class MIcon extends Vue {
    render(h, { props, data, children, listeners }) {
        const { name } = props;
        const icon = Icons[props.name];
        if (icon === undefined) {
            console.error(`存在未注册的图标${name}`);
            return <span />;
        }
        const height = SIZE[props.size] ? SIZE[props.size] : props.size;
        const width = height * (icon.height / icon.width);
        const staticClasses = data.staticClass !== undefined ? data.staticClass : '';
        const classes = data.class !== undefined ? data.class : '';
        const styles = Object.assign({ fill: 'currentColor' }, data.style, data.staticStyle);
        const click = listeners.click || 'javascript(0)';
        return (<svg xmlns='http://www.w3.org/2000/svg' version='1.1' staticClass={`${compName} ${compName}__${name} ${staticClasses}`} class={classes} style={styles} height={height} width={width} viewBox={icon.viewBox} onClick={() => click}>
        {icon.paths ? icon.paths.map((path) => <path d={path}/>) : <span />}
        {icon.polygons ? icon.polygons.map((path) => <polygon points={path}/>) : <span />}
      </svg>);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MIcon.prototype, "name", void 0);
tslib_1.__decorate([
    Prop({ type: [String, Number], default: Size.sm })
], MIcon.prototype, "size", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], MIcon.prototype, "color", void 0);
MIcon = tslib_1.__decorate([
    Component({
        functional: true
    })
], MIcon);
export default MIcon;
//# sourceMappingURL=icon.jsx.map