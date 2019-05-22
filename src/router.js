import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
import Home from '@/views/home/Home'
import My from '@/views/my/My'
import Setting from '@/views/set/Setting'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      // 拦截url定位 -> 更新底部导航栏状态
      beforeEnter: (to, from, next) => {
        store.commit('SET_BSNAVBAR_STATUS', 3)
        next()
      }
    }, {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
