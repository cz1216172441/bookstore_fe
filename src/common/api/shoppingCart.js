/**
 * ShoppingCart Module API
 */

import { http } from './../http/http'
import { host } from './host';

const addProductUrl = `${host}/shoppingCart/api/v1/product/add`                    // 加入购物车

const updateBookQuantityUrl = `${host}/shoppingCart/api/v1/book-quantity/update`   // 更新图书数量

const updateBookSelectedUrl = `${host}/shoppingCart/api/v1/book-selected/update`   // 更新图书状态

const updateAllBookSelectedUrl = `${host}/shoppingCart/api/v1/all-book-selected/update`  // 购物车商品全选/全不选

const deleteProductUrl = `${host}/shoppingCart/api/v1/product/delete`              // 删除商品

const deleteProductsUrl = `${host}/shoppingCart/api/v1/products/delete`            // 清空购物车

const listProductsUrl = `${host}/shoppingCart/api/v1/products/list`                // 购物车列表

export default {

    // 加入购物车
    addProduct(params) {
      return http({
        method: 'Post',
        url: addProductUrl,
        params: params
      })
    },

    // 更新商品数量
    updateBookQuantity(params) {
      return http({
        method: 'Post',
        url: updateBookQuantityUrl,
        params: params
      })
    },

    // 更新商品选中状态
    updateBookSelected(params) {
      return http({
        method: 'Post',
        url: updateBookSelectedUrl,
        params: params
      })
    },

    // 购物车商品全选/全不选
    updateAllBookSelected(params) {
      return http({
        method: 'Post',
        url: updateAllBookSelectedUrl,
        params: params
      })
    },

    // 删除商品
    deleteProduct(params) {
      return http({
        method: 'Post',
        url: deleteProductUrl,
        params: params
      })
    },

    // 清空购物车
    deleteProducts(params) {
      return http({
        method: 'Post',
        url: deleteProductsUrl,
        params: params
      })
    },

    // 获取购物车列表
    listProducts(params) {
      return http({
        method: 'Get',
        url: listProductsUrl,
        params: params
      })
    }

}