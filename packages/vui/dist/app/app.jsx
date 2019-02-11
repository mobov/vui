import * as tslib_1 from "tslib";
import { Vue, Component } from 'vue-property-decorator';
import App from './app.style';
const _name = 'm-app';
let MApp = class MApp extends Vue {
    render() {
        const { $slots } = this;
        return (<App staticClass={_name}>
        {$slots.default}
      </App>);
    }
};
MApp = tslib_1.__decorate([
    Component({
        components: { App }
    })
], MApp);
export default MApp;
//# sourceMappingURL=app.jsx.map