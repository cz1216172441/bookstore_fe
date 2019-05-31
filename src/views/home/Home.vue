<template>
  <div class="home">
    <home-search-box />
    <home-selector title="推荐" 
      :cateStatus="cateStatus"
      @categoryStatusChange="categoryStatusChange" />
    <van-loading class="home-loading"
      v-if="loading" color="#1989fa" />
    <home-category :category="firCategory"
      generation="fir"
      v-if="categoryStatus" />
    <home-recommend :advertisements="advertisements" />
    <bs-nav-bar />
  </div>
</template>

<script>
import BsNavBar from '@/common/components/BsNavBar'
import HomeSelector from '@/common/components/HomeSeletor'
import HomeSearchBox from '@/common/components/HomeSearchBox'
import HomeCategory from '@/common/components/HomeCategory'
import HomeRecommend from './components/HomeRecommend'
import advertisement from '@/common/api/advertisement'
import book from '@/common/api/book'
export default {
  name: 'Home',
  components: {
    BsNavBar,
    HomeSearchBox,
    HomeSelector,
    HomeCategory,
    HomeRecommend
  },
  data() {
    return {
      advertisements: [],
      firCategory: [],
      categoryStatus: false,
      loading: true,
      cateStatus: true
    }
  },
  created() {
    this.listAdvertisement()
    this.listFirCategory()
  },
  methods: {
    // 获取广告列表
    listAdvertisement() {
      advertisement.listAdvertisement().then((res) => {
        if (res.code === 0) {
          const data = res.data
          this.advertisements = data
        }
      })
    },

    // 获取图书一级分类列表
    listFirCategory() {
      book.listFirCategory().then((res) => {
        if (res.code === 0) {
          const data = res.data
          this.firCategory = data
          this.loading = false
        }
      })
    },

    categoryStatusChange(status) {
      this.categoryStatus = status
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    .home-loading
      z-index 9999
      margin 50% auto
</style>

