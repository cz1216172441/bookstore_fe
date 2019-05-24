<template>
  <div class="bs-button">
    <van-button class="elegant" 
      type="default" >
      {{label}}
    </van-button>
  </div>  
</template>

<script>
export default {
  name: 'BsButton',
  props: {
    label: String
  }
}
</script>

<style lang="stylus" scoped>
  .bs-button
    width auto
    .elegant
      display block
      margin 0 auto
      width 12rem
      color #fff
      background linear-gradient(to right, rgba(253, 89, 113, .9), rgba(253, 138, 103, .9))
      border 1px solid rgba(253, 138, 103, .9)
</style>

