<template>
  <div class="head-portrait">
    <img class="user-img not-login"
      v-if="!img || img === ''" 
      :src="notLogin">
    <img class="user-img" 
      :src="img"
      v-if="img && img!=''">
    <span class="user-name">{{nickname}}</span>
    <div class="head-oper">
      <van-icon name="setting-o setting"
                @click="goSetting" />
      <van-icon name="question-o" />
    </div>
  </div>  
</template>

<script>
export default {
  name: 'HeadPortrait',
  props: {
    img: String,
    nickname: String
  },
  computed: {
    showed() {
      if (this.img && this.img === '') {
        return true
      }
    }
  },
  data() {
    return {
      notLogin: './not_login.png'
    }
  },
  methods: {
    goSetting() {
      this.$router.push('/edit')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .head-portrait
    width 100%
    height 6.8rem
    background #2b90d9
    color #fff
    .user-img
      display inline-block
      float left
      width 3.6rem
      height 3.6rem
      margin 1rem
      border-radius 1.8rem
    .user-name
      float left
      font-size 16px
      line-height 5.6rem
    .head-oper
      float right
      line-height 5.6rem
      font-size 18px
      margin-right 1rem
      .setting
        display inline-block
        margin-right 1rem
</style>


