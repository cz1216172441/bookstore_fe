<template>
  <div class="book-selector">
    <div class="selector-block">
      <span class="selector-title">已选</span>
      <span class="selector-quantity">×{{quantity}}</span>
      <van-icon class="selector-arrow" 
        name="arrow"
        @click="skuSelect" />
    </div>
    <div class="selector-block">
      <span class="selector-title">送至</span>
    </div>
    <div class="selector-block">
      <span class="selector-title">服务</span>
      <span class="selector-tag">
        <van-tag color="#f2826a" plain>满99包邮</van-tag>
      </span>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'BookSelector',
  props: {
    book: Object
  },
  data() {
    return {
      quantity: 1,
      showBase: false,
      hideStock: false,
      sku: []
    }
  },
  methods: {
    skuSelect() {
      this.showBase = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .book-selector
    width 100%
    .selector-block
      width 100%
      height 2rem
      border-bottom 1px solid #eee
      .selector-title
        height 100%
        line-height 2rem
        font-size 12px
        padding-left .4rem
        color rgba(0, 0, 0, .4)
      .selector-quantity
        height 100%
        line-height 2rem
        font-size 14px
        padding-left .4rem
        color #4c4c4c
      .selector-tag
        margin-left .4rem
        .van-tag
          transform scale(.875)
  .selector-arrow
    float right
    height 100%
    line-height 2rem
    font-size 12px
    padding-right .4rem
    color rgba(0, 0, 0, .4)
</style>


