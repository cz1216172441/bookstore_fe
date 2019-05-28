<template>
  <div class="book-detail">
    <div class="book-wrapper" ref="wrapper">
      <div class="content">
        <book-info :book="book" />
        <div class="detail-space"></div>
        <book-selector :book="book" />
        <div class="detail-space"></div>
        <detail-show :img="book.detailImg" />
      </div>
    </div>
    <bs-good-action class="detail-action" />
  </div>  
</template>

<script>
import book from '@/common/api/book'
import BScroll from 'better-scroll'
import BookInfo from './components/BookInfo'
import BookSelector from './components/BookSelector'
import DetailShow from './components/DetailShow'
import BsGoodAction from './components/BsGoodAction'
export default {
  name: 'BookDetail',
  components: {
    BookInfo,
    BsGoodAction,
    BookSelector,
    DetailShow
  },
  data() {
    return {
      book: {}
    }
  },
  created() {
    this.getBookDetail()
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
    getBookDetail() {
      const id = this.$route.params.id
      const params = {
        bookInfoId: id
      }
      book.getBookById(params).then((res) => {
        if (res.code === 0) {
          const data = res.data
          this.book = data
          console.log(data)
        }
      })
    }
  }    
}
</script>

<style lang="stylus" scoped>
  .book-detail
    width 100%
    height 100vh
    .book-wrapper
      position fixed
      top 0
      left 0
      bottom 3rem
      width 100%
      overflow hidden
      .content
        .detail-space
          height .5rem
          background #eee
    .detail-action
      position fixed
      bottom 0
</style>

