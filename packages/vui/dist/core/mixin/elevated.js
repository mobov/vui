import Vue from 'vue';
export default Vue.extend({
    name: 'elevated',
    props: {
        elevation: {
            type: Number,
            validator(value) {
                return typeof value === 'number' && value >= 0 && value <= 24;
            }
        },
    }
});
//# sourceMappingURL=elevated.js.map