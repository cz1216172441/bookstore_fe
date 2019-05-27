import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
import Home from '@/views/home/Home'
import My from '@/views/my/My'
import Login from '@/views/login/Login'
import Register from '@/views/register/Register'
import Setting from '@/views/set/Setting'
import BookDetail from '@/views/detail/BookDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // 商城主页
      path: '/',
      name: 'home',
      component: Home
    }, {
      // 登录页面
      path: '/login',
      name: 'login',
      component: Login
    }, {
      // 注册页面
      path: '/register',
      name: 'register',
      component: Register
    }, {
      // 用户页面
      path: '/user',
      name: 'user',
      component: My,
      // 拦截url定位 -> 更新底部导航栏状态
      beforeEnter: (to, from, next) => {
        store.commit('SET_BSNAVBAR_STATUS', 3)
        next()
      }
    }, {
      // 个人资料编辑
      path: '/edit',
      name: 'edit',
      component: Setting
    }, {
      // 图书详情页
      path: '/detail/:id',
      name: 'detail',
      component: BookDetail
    }
  ]
})
