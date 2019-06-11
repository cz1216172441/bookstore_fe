<template>
  <div class="shopping-cart">
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      @click-right="onEdit"
    />
    <product-list :products="products"
      @dataUpdate="listProducts" />
    <van-submit-bar
      class="submit-bar"
      :price="getPrice"
      button-text="结 算"
      @submit="onSubmit">
      <van-checkbox class="checked" 
        v-model="checked">
        全选
      </van-checkbox>
    </van-submit-bar>
    <bs-nav-bar />
  </div>  
</template>

<script>
import BScroll from 'better-scroll'
import BsNavBar from '@/common/components/BsNavBar'
import ProductList from './components/ProductList'
import shoppingCart from '@/common/api/shoppingCart'
export default {
  name: 'ShoppingCart',
  components: {
    BsNavBar,
    ProductList
  },
  data() {
    return {
      price: 120,
      checked: false,
      products: [],
    }
  },
  watch: {
    checked() {
      const params = {
        bookSelected: this.checked
      }
      shoppingCart.updateAllBookSelected(params)
      this.listProducts()
    }
  },
  computed: {
    // 购物车总价
    getPrice() {
      let price = 0
      this.products.forEach(elem => {
        if (elem.bookSelected) {
          price += elem.bookVO.actualPrice  * elem.bookQuantity * 100
        }
      })
      return price
    }
  },
  created() {
    this.listProducts()
  },
  methods: {
    onEdit() {

    },

    onSubmit() {

    },

    // 获取购物车列表
    listProducts() {
      shoppingCart.listProducts().then(res => {
        if (res.code === 0) {
          const data = res.data
          this.products = data
        }
      })
      let checked = true;
      this.products.forEach(elem => {
        if (!elem.bookSelected) {
          checked = false
        }
      })
      this.checked = checked
    }
  }
}
</script>

<style lang="stylus" scoped>
  .submit-bar
    position fixed
    bottom 3.05rem
    border-sizing border-box
    border-top 1px solid rgba(0, 0, 0, .1)
  .checked
    margin-left 1rem
  .van-submit-bar__bar
    height 2rem
    line-height 2rem
    font-size 12px
  .van-button
    font-size 12px
    height 2rem
    line-height 2rem
    border none
    border-top 1px solid rgba(0, 0, 0, .1)
  .van-submit-bar__price
    font-size 14px
</style>

