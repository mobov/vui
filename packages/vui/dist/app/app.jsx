import Vue from 'vue';
import App from './app.style';
const _name = 'm-app';
export default Vue.extend({
    name: 'MApp',
    components: { App },
    render() {
        const { $slots } = this;
        return (<App staticClass={_name}>
        {$slots.default}
      </App>);
    }
});
//# sourceMappingURL=app.jsx.map