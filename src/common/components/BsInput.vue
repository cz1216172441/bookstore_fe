<template>
  <!-- 输入框通用组件 -->
  <div class="bs-input">
    <span class="bs-input-label">
      {{label}}
    </span>
    <input class="bs-input-comp"
      :type="type"
      v-model="value"
      :placeholder="placeholder"/>
  </div>  
</template>

<script>
export default {
  name: 'BsInput',
  props: {
    type: String,
    label: String,
    inputValue: String,
    placeholder: String
  },
  data() {
    return {
      value: this.inputValue
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bs-input
    margin-top 1rem
    .bs-input-label
      display block
      height 2rem
      line-height 2rem
      font-size 16px
      font-weight 600
      letter-spacing .1rem
    .bs-input-comp
      box-sizing border-box
      width 100%
      padding 10px 0
      font-size 13px
      border 0
      color rgba(0, 0, 0, .6)
      border-bottom 1px solid rgba(0, 0, 0, .1) 
</style>

