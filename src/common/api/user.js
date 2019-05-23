/**
 * User Module API
 */
import { http } from './../http/http'
import { Toast } from 'vant'
import { host } from './host';

/* user api */
const loginUrl = `${host}/user/api/v1/user/login`                   // 登录

const logoutUrl = `${host}/user/api/v1/user/logout`                 // 退出登录

const getUserInfoUrl = `${host}/user/api/v1/user/info`              // 获取用户信息

const registerUrl = `${host}/user/api/v1/user/register`             // 注册

const alterPasswordUrl = `${host}/user/api/v1/password/alter`       // 修改密码

const uploadImgUrl = `${host}/user/api/v1/headPortrait/upload`      // 上传用户头像

const alterUserInfoUrl = `${host}/user/api/v1/userInfo/update`      // 修改用户信息

const alterUserDetailUrl = `${host}/user/api/v1/userDetail/update`  // 修改用户详情

export default {

  /* 登录 */
  login(params) {
    console.log(http({
      method: 'Get',
      url: loginUrl,
      params: params
    }))
  }

}