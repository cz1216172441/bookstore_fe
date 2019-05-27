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

Vue.use(require('vue-wechat-title'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    next('/login')
  } else {
    next()
  }
})