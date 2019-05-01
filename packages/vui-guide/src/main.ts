import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'
// import '@mobov/vui/lib/style.css'
import mobov, {
  MApp, MView, MFrame, MIcon, MButton, MFlexFiller, MFlex, MList,
  MCheckbox, MRadio, MAppBar, MRow, MCol, MAvatar
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
    MView,
    MCheckbox,
    MRadio,
    MRow,
    MCol
  }
})
console.log(mobov)
Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
