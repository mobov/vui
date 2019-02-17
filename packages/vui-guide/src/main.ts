import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Megmore, {
  MApp, MView, MIcon, MButton, MFlexFiller, MFlex, MList,
  MCheckbox, MRadio, MAppBar, MRow, MCol, MRipple, MAvatar
} from '@megmore/vui'

Vue.use(Megmore, {
  components: {
    MApp,
    MAvatar,
    MRipple,
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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
