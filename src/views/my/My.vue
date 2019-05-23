<template>
  <div class="my">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <head-portrait />
        <order-selector />
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
export default {
  name: 'My',
  components: {
    BsNavBar,
    HeadPortrait,
    OrderSelector
  }
}
</script>

<style lang="stylus" scoped>

</style>


