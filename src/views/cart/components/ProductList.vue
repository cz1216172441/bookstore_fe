<template>
  <div class="product-list" ref="wrapper">
    <div class="content">
      <ul class="center-block" v-if="products.length > 0">
        <li class="product-item"
          v-for="(item, index) in products"
          :key="index">
          <van-checkbox 
            class="cart-checkbox"
            v-model="checked[index]">
          </van-checkbox>
          <img class="cart-img" :src="item.bookVO.infoImg[0]" />
          <span class="item-info">
            <div class="info-name">
              {{ item.bookVO.name }}
            </div>
            <div class="info-price">
              ¥{{ item.bookVO.actualPrice }}
            </div>
          </span>
          <van-stepper class="cart-stepper" 
            v-model="value[index]"
            async-change
            @change="onChange(item.shoppingCartDetailId, index)" />
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
import shoppingCart from '@/common/api/shoppingCart'
import BScroll from 'better-scroll'
import { setInterval } from 'timers';
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  data() {
    return {
      checked: [],
      value: []
    }
  },
  watch: {
    products() {
      this.products.forEach(elem => {
        this.checked.push(elem.bookSelected)
        this.value.push(elem.bookQuantity)
      });
    },
    // 监听选中框
    checked() {
      for (let i = 0; i < this.checked.length; i++) {
        if (this.products[i] !== undefined) {
          if (this.checked[i] !== this.products[i].bookSelected) {
            const params = {
              shoppingCartDetailId: this.products[i].shoppingCartDetailId,
              bookSelected: this.checked[i]
            }
            shoppingCart.updateBookSelected(params)
            this.$emit('dataUpdate')
          }
        }
      }
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
    onChange(id, index) {
      const params = {
        shoppingCartDetailId: id,
        bookQuantity: this.value[index]
      }
      shoppingCart.updateBookQuantity(params)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .product-list
    position fixed
    width 100%
    bottom 5.05rem
    top 46px
    background #F0F0F0
    .content
      .center-block
        width 90%
        height auto
        margin 1rem auto
        border-radius .4rem
        box-shadow 2px 2px 2px rgba(0, 0, 0, .2)
        .product-item
          display flex
          margin 0 auto
          height 5rem
          background #fff
          border-bottom 1px solid #F0F0F0
        .product-item:first-child
          border-top-left-radius .4rem
          border-top-right-radius .4rem
        .product-item:last-child
          border-bottom-left-radius .4rem
          border-bottom-right-radius .4rem
.cart-checkbox
  width 2.4rem
  text-align center
  line-height 5rem
.cart-img
  width 4rem
  height 4rem
  margin .5rem 0
  border-radius .4rem
  border 1px solid #c9d6de
.item-info
  width 30%
.info-name
  margin-top .8rem
  margin-left .6rem
  font-size 12px
  color #4c4c4c
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
.info-price
  margin-top .2rem
  margin-left .6rem
  font-size 12px
  color #f44
.cart-stepper
  flex 1
  line-height 5rem
  text-align center
  transform scale(.7)
</style>


