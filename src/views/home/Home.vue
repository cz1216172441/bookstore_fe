<template>
  <div class="home">
    <home-search-box/>
    <home-selector/>
    <home-recommend/>
    <bs-nav-bar/>
  </div>
</template>

<script>
import BsNavBar from '@/common/components/BsNavBar'
import HomeSelector from './components/HomeSeletor'
import HomeSearchBox from './components/HomeSearchBox'
import HomeRecommend from './components/HomeRecommend'
export default {
  name: 'Home',
  components: {
    BsNavBar,
    HomeSearchBox,
    HomeSelector,
    HomeRecommend
  }
}
</script>

<style lang="stylus" scoped>

</style>

