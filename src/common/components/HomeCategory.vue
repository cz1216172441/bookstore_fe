<template>
  <div class="home-category">
    <span :class="cateClass" 
      v-for="(item, index) in category"
      :key="index"
      @click="goToCategory(item.id)">
      {{ item.name }}  
    </span>
    <span class="cate-space"></span>
  </div>  
</template>

<script>
export default {
  name: 'HomeCategory',
  props: {
    category: Array,
    generation: String
  },
  watch: {
    /**
     * 相同组件必须监听路由变化
     * 解决this.$router.push()页面不变化问题
     */
    '$route'(to, from) {
      const path = to.fullPath
      this.$router.go(path)
    }
  },
  data() {
    return {
      cateClass: 'category-item ' + this.generation
    }
  },
  methods: {
    goToCategory(id) {
      this.$router.push('/category/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-category
    z-index 9999
    display flex
    flex-wrap wrap
    justify-content flex-start
    position fixed
    top 3.9rem
    width 100%
    background #fff
    border-bottom 1px solid #eee
    .category-item
      font-size 12px
      text-align center
      height 1.2rem
      margin-top .2rem
      line-height 1.2rem
      color #4c4c4c
      border 1px solid #eee
      border-radius .2rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .fir
      width 22%
      margin .2rem 1.15%
    .sec
      width 30%
      margin .2rem 1.3% 
    .cate-space
      width 100%
      height .4rem
</style>


