/**
 * User Module
 */
import user from '@/common/api/user'

import { SET_TOKEN, SET_EXPIRES, 
  SET_USERNAME, SET_PASSWORD, 
  SET_USERINFO, SET_REMEMBERED }
from './../mutation-types'
import { LOGIN, REGISTER, GET_USERINFO } 
from './../Action-types'

const token = localStorage.getItem('token')
const expires = localStorage.getItem('expires')

const username = localStorage.getItem('username')
const password = localStorage.getItem('password')
const remembered = localStorage.getItem('remembered')

const userInfo = localStorage.getItem('userInfo')

const state = {
  token: token,           // 令牌 
  expires: expires,       // 令牌过期时间
  username: username,     // 用户名
  password: password,     // 密码
  remembered: remembered, // 是否记住用户名密码
  userInfo: userInfo      // 用户信息
}

const getters = {
  getToken: (state) => {
    return state.token
  },
  getExpires: (state) => {
    return state.expires
  },
  getRemembered: (state) => {
    return state.remembered
  },
  getUsername: (state) => {
    return state.username
  },
  getPassword: (state) => {
    return state.password
  },
  getUserInfo: (state) => {
    return state.userInfo
  }
}

const mutations = {
  [SET_TOKEN](state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },
  [SET_EXPIRES](state, expires) {
    state.expires = expires
    localStorage.setItem('expires', expires)
  },
  [SET_USERNAME](state, username) {
    state.username = username
    localStorage.setItem('username', username)
  },
  [SET_PASSWORD](state, password) {
    state.password = password
    localStorage.setItem('password', password)
  },
  [SET_REMEMBERED](state, remembered) {
    state.remembered = remembered
    localStorage.setItem('remembered', remembered)
  },
  [SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo
    localStorage.setItem('userInfo', userInfo)
  }
}

const actions = {

  /**
   * 用户注册
   * @param {commit} param0 
   * @param {username, password} params 
   */
  register({commit}, params) {
    console.log(params)
    user.register(params).then((res) => {
      if (res.code === 0) {
        Toast.success('注册成功')
        router.push('/login')
      } else {
        Toast.fail('注册失败')
        router.push('/register')
      }
    })
  },

  [GET_USERINFO]({commit}) {
    user.getUserInfo().then((res) => {
      if (res.code === 0) {
        commit('SET_USERINFO', res.data)
      }
    })
  }
}

export default {

  state: state,

  getters: getters,

  mutations: mutations,

  actions: actions

}