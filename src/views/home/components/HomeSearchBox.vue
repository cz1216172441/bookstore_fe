<template>
  <div class="home-search-box">
    <span class="home-logo">谦谦</span>
    <van-search class="home-search"
        placeholder="请输入搜索关键词"
        v-model="value"
        @click="searchRouter" />
  </div>
</template>

<script>
export default {
  name: 'HomeSearchBox',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    // 搜索栏路由跳转
    searchRouter() {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-search-box
    display flex
    position fixed
    top 0
    width 100%
    height 2.5rem
    .home-logo
      display inline-block
      width 4rem
      height 2.5rem
      line-height 2.38rem
      text-align center
      font-size 20px
      font-weight 600
      color #996600
    .van-cell
      padding 1px 0px
      font-size 12px
    .home-search
      padding 5px
      width 60%
</style>


