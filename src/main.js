import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import '@/assets/css/reset.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
