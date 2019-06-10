/**
 * Address Module API
 */

import { http } from './../http/http'

const addAddressUrl = "/address/api/v1/address/add"         // 添加地址

const updateAddressUrl = "/address/api/v1/address/update"   // 更新地址

const listAddressUrl = "/address/api/v1/address/list"       // 地址列表

const getAddressUrl = "/address/api/v1/address/get"            // 获取地址

const deleteAddressUrl = "/address/api/v1/address/delete"   // 删除地址

export default {
    
  // 添加地址
  addAddress(params) {
    return http({
      method: 'Post',
      url: addAddressUrl,
      params: params
    })   
  },

  // 更新地址
  updateAddress(params) {
    return http({
      method: 'Post',
      url: updateAddressUrl,
      params: params
    })  
  },

  // 地址列表
  listAddress(params) {
    return http({
      method: 'Get',
      url: listAddressUrl,
      params: params  
    })
  },

  // 获取地址
  getAddress(params) {
    return http({
      method: 'Get',
      url: getAddressUrl,
      params: params  
    })
  },

  // 删除地址
  deleteAddress(params) {
    return http({
      method: 'Post',
      url: deleteAddressUrl,
      params: params  
    })
  }

}
