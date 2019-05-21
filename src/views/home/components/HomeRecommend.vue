<template>
  <div class="home-recommend" ref="wrapper">
    <ul class="content">
      <li class="advertisement">
        <van-swipe :autoplay="2000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img class="adv-img" :src=image />
          </van-swipe-item>
        </van-swipe>
      </li>
    </ul>
  </div>  
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HomeRecommend',
  data() {
    return {
      images: [
        'http://img60.ddimg.cn/upload_img/00087/geq/750x315_lyx_0517-1558089581.jpg',
        'http://img63.ddimg.cn/upload_img/00678/zsts/750x315-1558317845.jpg',
        'http://img52.ddimg.cn/9002790060970422.jpg',
        'http://img63.ddimg.cn/upload_img/00316/by/750-315-1558090183.jpg',
        'http://img63.ddimg.cn/upload_img/00749/xin/ts-750x315-1558255347.jpg'
      ]
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
  }
}
</script>

<style lang="stylus" scoped>
  .home-recommend
    position fixed
    left 0
    top 3.9rem
    bottom 3rem
    width 100%
    overflow hidden
    .advertisement
      width 100%
      .adv-img
        width 100%
</style>

