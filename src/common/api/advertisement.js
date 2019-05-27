/**
 * Advertisement Module API
 */
import { http } from './../http/http'
import { host } from './host';

/* advertisement api */
const listAdvertisementUrl = "/advertisement/api/v1/advertisement/list"    // 广告列表

export default {

  // 获取广告列表
  listAdvertisement() {
    return http({
      method: 'Get',
      url: listAdvertisementUrl,
      params: {
        pageNum: 1,
        pageSize: 6
      }
    })
  }

}