<template>
  <div class="home-recommend" ref="wrapper">
    <ul class="content">
      <!-- 广告列表 -->
      <li class="advertisement">
        <van-swipe :autoplay="2000" indicator-color="white">
          <van-swipe-item 
            v-for="(image, index) in advertisements" 
            :key="index">
            <img class="adv-img" 
              :src=image.img />
          </van-swipe-item>
        </van-swipe>
      </li>
      <!-- 新品推荐 -->
      <home-book-panel 
        title="新品推荐"
        :books="books" />
      <div class="gray-space"></div>
      <home-book-panel
        title="热卖爆品"
        :books="books" />
    </ul>
  </div>  
</template>

<script>
import BScroll from 'better-scroll'
import HomeBookPanel from './HomeBookPanel'
import book from '@/common/api/book'
export default {
  name: 'HomeRecommend',
  components: {
    HomeBookPanel
  },
  props: {
    advertisements: Array
  },
  data() {
    return {
      books: []
    }
  },
  created() {
    this.listBookUpToDate()
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  },
  methods: {
    // 获取新品推荐列表
    listBookUpToDate() {
      const params = {
        pageNum: 1,
        pageSize: 6
      }
      book.listBookUpToDate(params).then((res) => {
        if (res.code === 0) {
          const data = res.data
          this.books = data
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-recommend
    position fixed
    left 0
    top 3.9rem
    bottom 3rem
    width 100%
    overflow hidden
    .advertisement
      width 100%
      .adv-img
        width 100%
    .gray-space
      height .8rem
      background-color #eee
</style>

