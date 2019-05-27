<template>
  <div class="book-info">
    <van-swipe class="book-swipe" @change="onChange">
      <van-swipe-item class="book-swipe-item"
        v-for="(img, index) in bookInfoImgs"
        :key="index">
        <img class="swipe-img" :src="img" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/{{ bookInfoImgs.length }}
      </div>
    </van-swipe>
    <!-- <div class="info-space"></div> -->
    <div class="actual-price">¥{{book.actualPrice}}</div>
    <div class="book-name">{{book.name}}</div>
    <div class="book-intro">{{book.intro}}</div>
  </div>  
</template>

<script>
export default {
  name: 'BookInfo',
  props: {
    book: Object
  },
  data() {
    return {
      current: 0
    }
  },
  computed: {
    bookInfoImgs() {
      return this.getBookInfoImgs(this.book.infoImg)
    }
  },
  methods: {
    getBookInfoImgs(param) {
      if (param && param.search(';')) {
        let arr = param.split(';')
        arr.shift()
        return arr
      }
      return [].push(param)
    },

    onChange(index) {
      this.current = index;
    }
  }
}
</script>

<style lang="stylus" scoped>
  .book-info
    width 100%
    .book-swipe
      .book-swipe-item
        width 100%
        .swipe-img
          display block
          margin 0 auto
          width 100%
    .info-space
      width 100%
      height .4rem
      background #D09E88
    .actual-price
      height 2rem
      line-height 2rem
      padding-left .4rem
      font-size 18px
      font-weight 600
      color #f9320c
    .book-name
      font-size 16px
      font-weight 600
      color #4c4c4c
      padding-left .4rem
    .book-intro
      font-size 12px
      color rgba(0, 0, 0, .5)
      margin-top .4rem
      letter-spacing .01rem
      padding-left .4rem
      padding-right .4rem
  .custom-indicator
    position absolute
    right 5px
    bottom 5px
    padding 2px 5px
    color #fff
    font-size 12px
    background rgba(0, 0, 0, 0.2)
    border-radius .6rem
</style>

