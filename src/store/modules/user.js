/**
 * User Module
 */
import user from '../../api/user'
import router from '../../router'

const token = ''

export default {

  state: {
    token: token  
  },

  getters: {
    /**
     * 获取Token
     */
    getToken: (state) => {
      return state.token
    }
  },

  mutations: {
    /**
     * 用户登录
     * @param {状态} state 
     * @param {参数} params 
     */
    login(state, params) {
      state.token = user.login(params)
      if (state.token != '') {
        router.push('/')
      }
    }
  }

}