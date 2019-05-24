/**
 * User Module
 */
import user from '@/common/api/user'
import router from '@/router'

import { Toast } from 'vant'

import { SET_TOKEN, SET_USERNAME, SET_PASSWORD } from './../mutation-types'

const token = localStorage.getItem('token')

const username = localStorage.getItem('username')
const password = localStorage.getItem('password')

const state = {
  token: token,
  username: username,
  password: password
}

const getters = {
  getToken: (state) => {
    return state.token
  },
  getUsername: (state) => {
    return state.username
  },
  getPassword: (state) => {
    return state.password
  }
}

const mutations = {
  [SET_TOKEN](state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },
  [SET_USERNAME](state, username) {
    state.username = username
    localStorage.setItem('username', username)
  },
  [SET_PASSWORD](state, password) {
    state.password = password
    localStorage.setItem('password', password)
  }
}

const actions = {
  /**
   * 用户登录
   * @param {commit} param0 
   * @param {username, password} params 
   * @param {remembered} remembered 
   */
  login({commit}, params, remembered) {
    user.login(params).then((res) => {
      if (res.code === 0) {
        commit('SET_TOKEN', res.data.token)
        if (remembered) {
          console.log('111')
          commit('SET_USERNAME', params.username)
          commit('SET_PASSWORD', params.password)
        } else {
          if (localStorage.getItem('username')) {
            localStorage.removeItem('username')
          }
          if (localStorage.getItem('password')) {
            localStorage.removeItem('password')
          }
        }
        Toast.success('登陆成功')
        router.push('/')
      }
      if (res.code === 1) {
        Toast.fail('登录失败')
        router.push('/login')
      }
    })
  },

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
  }
}

export default {

  state: state,

  getters: getters,

  mutations: mutations,

  actions: actions

}