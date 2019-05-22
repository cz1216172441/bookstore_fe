<template>
  <div class="my" ref="wrapper">
    <div class="content">
      <head-portrait />
      <order-selector />
      <bs-nav-bar />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import BsNavBar from '@/common/BsNavBar'
import HeadPortrait from './components/HeadPortrait'
import OrderSelector from './components/OrderSelector'
export default {
  name: 'My',
  components: {
    BsNavBar,
    HeadPortrait,
    OrderSelector
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
  }
}
</script>

<style lang="stylus" scoped>

</style>


