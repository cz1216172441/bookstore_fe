/**
 * User Module API
 */
import axios from 'axios'
import { Toast } from 'vant'
import { host } from './host';


/* api list for user */
const userApi = {
  'login': '/user/api/v1/user/login',                           // 登录
  'logout': '/user/api/v1/user/logout',                         // 退出登录
  'getUserInfo': '/user/api/v1/user/info',                      // 获取用户信息
  'register': '/user/api/v1/user/register',                     // 注册
  'alterPassword': '/user/api/v1/password/alter',               // 修改密码
  'uploadImg': '/user/api/v1/headPortrait/upload',              // 上传用户头像
  'alterUserInfo': '/user/api/v1/userInfo/update',              // 修改用户信息
  'alterUserDetail': '/user/api/v1/userDetail/update',          // 修改用户详情
}


export default {

  /* 登录 */
  login(params) {
    axios.get(host + userApi['login'], {
        params: params
      })
      .then(res => {
        if (res.data.code == 0) {
          Toast.success('登录成功')
          return res.headers.Token
        } else {
          Toast.fail('登录失败')
          return ''
        }
      })
      .catch(err => {
        Toast.fail('登录失败')
      })
  }

}