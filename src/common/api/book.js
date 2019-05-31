/**
 * Book Module API
 */
import { http } from './../http/http'
import { host } from './host';

/* book api */
const listFirCategoryUrl = "/book/api/v1/fir-category/list"     // 一级分类列表

const listSecCategoryUrl = "/book/api/v1/sec-category/list"     // 二级分类列表

const getBookByIdUrl = "/book/api/v1/book/get"                  // 获取图书信息

const listBookUpToDateUrl = "/book/api/v1/book/list"            // 获取新品推荐图书列表

const listBookByCategoryUrl = "/book/api/v1/book-categoryId/list"   // 根据分类id获取图书列表

const getCategoryNameUrl = "/book/api/v1/category-name/get"     // 获取图书分类名

export default {

  // 获取图书一级分类列表
  listFirCategory(params) {
    return http({
      method: 'Get',
      url: listFirCategoryUrl,
      params: params
    })
  },

  // 获取图书二级分类列表
  listSecCategory(params) {
    return http({
      method: 'Get',
      url: listSecCategoryUrl,
      params: params
    })
  },

  // 获取新品推荐图书列表
  listBookUpToDate(params) {
    return http({
      method: 'Get',
      url: listBookUpToDateUrl,
      params: params
    })
  },

  // 获取图书详情页信息
  getBookById(params) {
    return http({
      method: 'Get',
      url: getBookByIdUrl,
      params: params
    })
  },

  // 获取图书分类名
  getCategoryName(params) {
    return http({
      method: 'Get',
      url: getCategoryNameUrl,
      params: params
    })
  },

  // 根据分类id获取图书列表
  listBookByCategory(params) {
    return http({
      method: 'Get',
      url: listBookByCategoryUrl,
      params: params
    })
  }

}