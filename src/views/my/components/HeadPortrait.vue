<template>
  <div class="head-portrait">
    <img class="user-img" :src="headPortrait" alt="">
    <span class="user-name">{{name}}</span>
    <div class="head-oper">
      <van-icon name="setting-o setting" />
      <van-icon name="question-o" />
    </div>
  </div>  
</template>

<script>
export default {
  name: 'HeadPortrait',
  data() {
    return {
      name: 'noTalent',
      headPortrait: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2975059141,2466776994&fm=27&gp=0.jpg'
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
        margin-right .4rem
</style>


