<template>
  <div class="book-detail" ref="wrapper">
    <div class="content">
      <book-info :book="book" />
    </div>
    <bs-good-action class="detail-action" />
  </div>  
</template>

<script>
import book from '@/common/api/book'
import BScroll from 'better-scroll'
import BookInfo from './components/BookInfo'
import BsGoodAction from './components/BsGoodAction'
export default {
  name: 'BookDetail',
  components: {
    BookInfo,
    BsGoodAction
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
    .detail-action
      position fixed
      bottom 0
</style>

