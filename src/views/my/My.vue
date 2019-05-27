<template>
  <div class="my">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <head-portrait 
          :img="getUserInfo.img"
          :nickname="getUserInfo.nickname" />
        <order-selector />
        <van-loading
          class="loading" 
          v-if="!getUserInfo" 
          color="#1989fa" />
      </div>
    </div>
    <bs-nav-bar />
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import BsNavBar from '@/common/components/BsNavBar'
import HeadPortrait from './components/HeadPortrait'
import OrderSelector from './components/OrderSelector'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'My',
  components: {
    BsNavBar,
    HeadPortrait,
    OrderSelector
  },
  created() {
    this.GET_USERINFO()
  },
  computed: {
    ...mapGetters([
      'getUserInfo'
    ])
  },
  methods: {
    ...mapActions([
      'GET_USERINFO'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  .loading
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
</style>


