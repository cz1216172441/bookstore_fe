<template>
  <div class="bs-good-action">
    <span class="action-icon-block"
      @click="goToShoppingCart">
      <van-icon class="action-icon" name="cart-o" />
      <span class="icon-title">购物车</span>
    </span>
    <span class="cart-button-block">
      <van-button class="cart-buttun other"
        @click="addProduct"
        type="default">加入购物车</van-button>
      <van-button class="cart-buttun" 
        type="default">立即购买</van-button>
    </span>
  </div>  
</template>

<script>
import shoppingCart from '@/common/api/shoppingCart'
import { Toast } from 'vant'
export default {
  name: 'BsGoodAction',
  methods: {
    // 加入购物车
    addProduct() {
      const id = this.$route.params.id
      const params = {
        bookInfoId: id
      }
      shoppingCart.addProduct(params).then(res => {
        if (res.code === 0) {
          Toast('已加入购物车')
        } else {
          Toast("加入购物车失败")
        }
      })
    },

    goToShoppingCart() {
      this.$router.push('/shoppingCart')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bs-good-action
    width 100%
    height 3rem
    background #eee
    .action-icon-block
      display inline-block
      width 4rem
      height 100%
      text-align center
      color #4c4c4c
      .action-icon
        display block
        margin-top .4rem
        font-size 24px
      .icon-title
        display block
        font-size 12px
        transform scale(.8)
        letter-spacing .1rem
    .cart-button-block
      float right
      display inline-flex
      align-items center
      justify-content center
      width 65%
      height 100%
      .cart-buttun
        width 45%
        margin-left .2rem
        height 2rem
        line-height 1.8rem
        color #fff
        font-size 12px
        background #c03546
        border-radius .6rem
      .other
        background #f26d5b
</style>

