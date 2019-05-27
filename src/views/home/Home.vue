<template>
  <div class="home">
    <home-search-box/>
    <home-selector/>
    <home-recommend :advertisements="advertisements" />
    <bs-nav-bar />
  </div>
</template>

<script>
import BsNavBar from '@/common/components/BsNavBar'
import HomeSelector from './components/HomeSeletor'
import HomeSearchBox from './components/HomeSearchBox'
import HomeRecommend from './components/HomeRecommend'
import advertisement from '@/common/api/advertisement'
export default {
  name: 'Home',
  components: {
    BsNavBar,
    HomeSearchBox,
    HomeSelector,
    HomeRecommend
  },
  data() {
    return {
      advertisements: []
    }
  },
  created() {
    this.listAdvertisement()
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
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

