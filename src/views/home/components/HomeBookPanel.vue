<template>
  <div class="home-book-panel">
    <span class="panel-title">{{title}}</span>
    <div class="product-panel">
      <span class="product-elem"
        v-for="(book, index) in books"
        :key="index"
        @click="goToBookDetail(book.id)">
        <img class="elem-img" :src="mulUrlHandle(book.infoImg)" />
        <span class="elem-name">
          {{book.name}}
        </span>
        <span class="elem-price">
          ¥{{book.actualPrice}}
        </span>
      </span>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'HomeBookPanel',
  props: {
    title: String,
    books: Array
  },
  methods: {
    // 跳转到图书详情页
    goToBookDetail(id) {
      this.$router.push('/detail/' + id)
    },

    // 图片地址处理
    mulUrlHandle(url) {
      if (url.search(';')) {
        return url.split(';')[0]
      }
      return url
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-book-panel
    width 100%
    height auto
    .panel-title
      display block
      width 100%
      height 2rem
      line-height 2rem
      font-size 14px
      font-weight 600
      color #4c4c4c
      letter-spacing .1rem
      text-align center
    .product-panel
      display flex
      align-content space-between
      flex-wrap wrap
      width 100%
      height auto
      .product-elem
        width 33.3%
        height auto
        color #4c4c4c
        background #fff
        .elem-img
          display block
          margin 0 auto
          margin-top .4rem
          width 80%
          border-radius .4rem
        .elem-name
          display block
          height 1.5rem
          line-height 1.5rem
          font-size 12px
          text-align center
        .elem-price
          display block
          color #E53A40
          text-align center
          font-size 12px
          margin-bottom .4rem
</style>
