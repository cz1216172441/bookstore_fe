<template>
  <div class="order-selector">
    <div class="order-title">
      <span class="my-order-title">我的订单</span>
      <span class="all-order">
        <span class="all-order-title">全部订单</span>
        <van-icon name="arrow all" />
      </span>
    </div>
    <div class="order-icons">
      <span class="order-icon">
        <svg class="icon order-pay" aria-hidden="true">
          <use xlink:href="#icon-qianbao"></use>
        </svg>
      </span>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'OrderSelector'  
}
</script>

<style lang="stylus" scoped>
  .order-selector
    width 100%
    height 10rem
    margin-top -1.2rem
    border-top-left-radius .5rem 
    border-top-right-radius .5rem
    background-color #fff
    .order-title
      width 100%
      height 2rem
      line-height 2rem
      letter-spacing .05rem
      border-bottom 1px dotted rgba(0, 0, 0, .1) 
      .my-order-title
        display inline-block
        float left
        width 5.6rem
        text-align center
        font-size 14px
      .all-order
        display flex
        float right
        width 4.5rem
        text-align center
        font-size 12px
        color rgba(0, 0, 0, .6)
        .all-order-title
          display inline-block
        .all
          display inline-block
          line-height 2.1rem
    .order-icons
      width 100%
      height 3rem
      .order-icon
        width 25%
        text-align center
        .order-pay
          width 20%
          font-size 24px
</style>


