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
    <div class="info-price">
      <span class="actual-price">
        ¥{{book.actualPrice}}
      </span>
      <span class="original-price">
        ¥{{book.originalPrice}}
      </span>
    </div>
    <div class="book-name">{{book.name}}</div>
    <div class="book-intro">{{book.intro}}</div>
    <div class="book-aut-pub">
      <span class="book-author">{{book.author}} 著</span>
      <span class="book-publisher">{{book.publisher}}</span>
    </div>
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
    .info-price
      width 100%
      height 2rem
      background linear-gradient(to right, rgba(253, 89, 113, .9), rgba(253, 138, 103, .9))
      .actual-price
        height 2rem
        line-height 2rem
        padding-left .4rem
        font-size 16px
        color #fff
      .original-price
        font-size 12px
        color #ffffff
        text-decoration line-through 
    .book-name
      height 2rem
      line-height 2rem
      font-size 16px
      font-weight 600
      color #4c4c4c
      padding-left .4rem
    .book-intro
      font-size 12px
      line-height 1rem
      color rgba(0, 0, 0, .6)
      letter-spacing .01rem
      padding-left .4rem
      padding-right .4rem
    .book-aut-pub
      width 100%
      height 1.4rem
      line-height 1.4rem
      font-size 12px
      color #6f3826
      border-bottom 1px solid #eee
      .book-author
        float left
        display inline-block
        padding-left .4rem
      .book-publisher
        float right
        display inline-block
        padding-right .6rem
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

