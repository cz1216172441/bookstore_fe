/**
 * check.js
 * Check out whether the value of the input label is correct.
 * @author noTalent
 * @version 1.0
 * 2019.05.24
 */
import { Toast } from 'vant'

/**
 * 验证登录参数
 * @param {username, password} params 
 */
export function checkOutLoginParams(params) {
  if (params) {
    if (!checkOutUsername(params.username)) {
      return false
    }
    if (params.password === '') {
      Toast('密码不能为空')
      return false
    }
    return true
  }
  return false
}

export function checkOutRegisterParams(params) {
  if (params) {
    if (!checkOutUsername(params.username)) {
      return false
    }
    if (!checkOutPassword(params.password)) {
      return false
    }
    return true
  }
  return false
}

function checkOutUsername(username) {
  if (username === '') {
    Toast('用户名不能为空')
    return false
  }
  if (username.length < 4 &&
      username.length > 16) {
    Toast('用户名长度为4-16')
    return false
  }
  const reg = /^[a-zA-Z0-9]{3,15}$/
  if (!reg.test(username)) {
    Toast('用户名不正确')
    return false
  }
  return true
}

function checkOutPassword(password) {
  if (password === '') {
    Toast('密码不能为空')
    return false
  }
  const reg = /^[a-zA-Z0-9]{3,15}$/
  if (!reg.test(password)) {
    Toast('密码不能含有非法字符，长度为4-16')
    return false
  }
  return true
}