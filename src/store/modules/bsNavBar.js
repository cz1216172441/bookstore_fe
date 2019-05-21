/**
 * bsNavBar.js
 * BsNavBar Status Management
 * @author noTalent
 * @version 1.0
 * 2019.05.22
 */

import { SET_BSNAVBAR_STATUS } from './../mutation-types'

// 路由路径
const urls = ['/', '/new', '/cart', '/my']
// icon类名
const icons = [
  '#icon-zhuye',
  '#icon-faxian',
  '#icon-gouwuche',
  '#icon-wode',
  '#icon-zhuye-copy', 
  '#icon-faxian-copy',
  '#icon-gouwuche-copy',
  '#icon-wode-copy'
]
// 标签名
const labels = ['主页', '发现', '购物车', '我的']

export default {
  
  state: {
    status: 0,
    urls: urls,
    icons: icons,
    labels: labels
  },

  getters: {
    getStatus: (state) => {
      return state.status
    },
    getUrls: (state) => {
      return state.urls
    },
    getIcons: (state) => {
      return state.icons
    },
    getLabels: (state) => {
      return state.labels
    }
  },

  mutations: {
    [SET_BSNAVBAR_STATUS] (state, status) {
      state.status = status
    }
  }

}