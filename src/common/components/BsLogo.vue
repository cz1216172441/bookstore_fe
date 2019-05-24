<template>
  <div class="bs-logo">
    <img class="logo" :src="img">
    <span class="bookstore-title">谦谦书城 QianQian</span>
    <span class="login-title">{{ tips }} to continue</span>
  </div>  
</template>

<script>
export default {
  name: 'BsLogo',
  props: {
    tips: String
  },
  data() {
    return {
      img: './logo.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bs-logo
    width 100%
    .logo
      display block
      position absolute
      top 0
      margin-left 2rem
      width 4rem
      height 4rem
    .bookstore-title
      display block
      margin 5rem 2rem
      font-size 24px
      font-weight 600
    .login-title
      display block
      margin-top -4.2rem
      margin-left 2rem
      color rgba(0, 0, 0, .4)
</style>

