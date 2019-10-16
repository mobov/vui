import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
// import './registerServiceWorker'
// import '@mobov/vui/lib/style.css'
import mobov, {
  MApp, MFrame, MView, MIcon, MButton, MFlexFiller, MFlex, MList, MListItem, MContainer,
  MCheckbox, MRadio, MAppBar, MRow, MCol, MAvatar, MTooltip, MPopover, MTransition
} from '@mobov/vui'

Vue.use(mobov, {
  components: {
    MApp,
    MFrame,
    MAvatar,
    MAppBar,
    MIcon,
    MButton,
    MFlexFiller,
    MFlex,
    MList,
    MListItem,
    MContainer,
    MView,
    MCheckbox,
    MRadio,
    MRow,
    MCol,
    MTooltip,
    MTransition,
    MPopover
  }
})
console.log(mobov)
Vue.config.productionTip = true

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
