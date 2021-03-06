/**
 * Axios Packaging
 * @author noTalent
 * @version 1.0
 * 2019.05.23
 */
import axios from 'axios'
import store from '@/store/store'
import router from '@/router'
import { Toast } from 'vant';
import qs from 'qs'


/* axios请求超时时间 */
axios.defaults.timeout = 5000

/* post请求头 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/* axios请求拦截器 */
axios.interceptors.request.use(config => {
  const token = store.getters.getToken
  // 如果token存在，http的每个请求header都加上Token
  if (token) {
    config.headers.Token = token
  }
  return config
})

/* response拦截器 */
axios.interceptors.response.use(res => {
  if (res === undefined) {
    Toast.fail('请登录用户')
    router.push('/login')
  }
  if (res.data.code !== undefined) {
    if (res.data.code === -1) {
      Toast.fail('请登录用户')
      router.push('/login')
    }
    return res.data
  } else {
    Toast.fail('请登录用户')
    router.push('/login')
    return res.data
  }
}, err => {
  if (err.response) {
    switch (err.response.status) {
      case 401:
          router.replace({
            path: '/login',
            quert: {
              redirect: router.currentRoute.fullpath
            }
          })
    }
  } 
  console.log(err)
  return Promise.reject(err.response)
})

/* 对外接口 */
export function http({method, url, params}) {
  if (method == 'Get') {
    return get(url, params)
  } else if (method == 'Post') {
    return post(url, params)
  }
}

function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
    .then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}