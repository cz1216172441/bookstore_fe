<template>
  <!-- 底部导航栏 -->
  <div class="bsNavBar">
    <span class="bsNavBar-icon"
          v-for="(url, index) in getUrls"
          :key="index"
          @click="goTo(url)">
      <svg class="icon my-icon" aria-hidden="true">
        <use v-if="getStatus == index" 
             :xlink:href="getStatus == index ? 
             getIcons[getStatus] : getIcons[getStatus + 1]">
        </use>
        <use v-if="getStatus != index" 
             :xlink:href="getStatus != index ? 
             getIcons[index + 4] : getIcons[index]">
        </use>
      </svg>
      <span class="font">{{getLabels[index]}}</span>
    </span>
  </div>  
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { constants } from 'crypto';
export default {
  name: 'BsNavBar',
  computed: {
    ...mapGetters([
      'getStatus',
      'getUrls',
      'getIcons',
      'getLabels'
    ])
  },
  methods: {
    // 路由跳转
    goTo(url) {
      switch(url) {
        case '/':
          this.SET_BSNAVBAR_STATUS(0)
          break
        case '/new':
          this.SET_BSNAVBAR_STATUS(1)
          break
        case '/cart':
          this.SET_BSNAVBAR_STATUS(2)
          break
        case '/my':
          this.SET_BSNAVBAR_STATUS(3)
          break
      }
      this.$router.push(url)
    },

    // vuex -> mutations
    ...mapMutations([
      'SET_BSNAVBAR_STATUS'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  .bsNavBar
    position fixed
    display flex
    bottom 0
    width 100%
    height 3rem
    border-top 1px solid #e2e2e2
    background-color #eee
    .bsNavBar-icon
      width 25%
      text-align center
      letter-spacing .04rem
      .my-icon
        margin-top .1rem
        width 100%
        font-size 1.7rem
      .font
        display inline-block
        font-size 1rem
        transform scale(.75)
        color #4c4c4c
</style>

