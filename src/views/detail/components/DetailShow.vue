<template>
  <div class="detail-show">
    <div class="detail-title">
      图书详情
    </div>
    <div class="detail-img">
      <img class="show-img" :src="img" />
    </div>
  </div>  
</template>

<script>
export default {
  name: 'DetailShow',
  props: {
    img: String
  }
}
</script>

<style lang="stylus" scoped>
  .detail-show
    width 100%
    line-height 1.5rem
    font-size 14px
    font-weight 600
    color #4c4c4c
    text-align center
    .detail-title
      border-bottom 1px solid #eee
    .detail-img
      width 100%
      font-size 0
      .show-img
        width 100%
</style>

