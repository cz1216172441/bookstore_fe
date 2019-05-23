import Vue from 'vue'
import Vuex from 'vuex'

import bsNavBar from './modules/bsNavBar'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    bsNavBar: bsNavBar,  // 底部导航栏模块
    user: user,          // 用户模块
  }

})
