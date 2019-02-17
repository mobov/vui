import * as tslib_1 from "tslib";
import { Vue, Component } from 'vue-property-decorator';
let MApp = class MApp extends Vue {
    render() {
        const { $slots } = this;
        return (<div staticClass="m-app">
        {$slots.default}
      </div>);
    }
};
MApp = tslib_1.__decorate([
    Component
], MApp);
export default MApp;
//# sourceMappingURL=app.jsx.map