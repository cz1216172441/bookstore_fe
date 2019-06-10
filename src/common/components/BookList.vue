<template>
  <div class="book-list" ref="wrapper">
    <div class="content">
      <van-card v-for="(book, index) in bookList"
        :key="index"
        :price="book.actualPrice"
        :origin-price="book.originalPrice"
        :desc="book.author"  
        :title="book.name"
        :thumb="book.infoImg[0]"
        :thumb-link="getThumbLink(book.id)" />
      <div class="list-space" />
    </div>
  </div>  
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BookList',
  props: {
    bookList: Array
  },
  data() {
    return {
      imageURL: ''
    }
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
    getThumbLink(id) {
      return "/detail/" + id
    }
  }
}
</script>

<style lang="stylus" scoped>
  .book-list
    overflow hidden
    position fixed
    width 100%
    height 100vh
    left 0
    top 3.9rem
  .list-space
    width 100%
    height 4rem
</style>

