<template>
  <div class="home-selector">
    <span :class="recommend">{{title}}</span>
    <span :class="selector" 
      v-if="cateStatus"
      @click="categorySelector">
      <span class="classify">分类</span>
      <van-icon class="down" :name="name" />
    </span>
  </div>  
</template>

<script>
export default {
  name: 'HomeSelector',
  props: {
    title: String,
    cateStatus: Boolean
  },
  data() {
    return {
      selected: false,
      recommend: 'selector-rec act',
      selector: 'selector-cla',
      name: 'arrow-down'
    }
  },
  methods: {
    // 图书分类选择
    categorySelector() {
      if (this.selected) {
        this.name = 'arrow-down'
        this.recommend = 'selector-rec act'
        this.selector = 'selector-cla'
        this.selected = false
      } else {
        this.name = 'arrow-up'
        this.recommend = 'selector-rec'
        this.selector = 'selector-cla act'
        this.selected = true
      }
      this.$emit('categoryStatusChange', this.selected)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-selector
    position fixed
    top 2.5rem
    width 100%
    height 1.4rem
    color #4c4c4c
    font-size 12px
    line-height 1rem
    text-align center
    border-bottom 1px solid #e2e2e2
    .selector-rec
      width auto
      float left
      margin-left .6rem
      padding-left .2rem
      padding-right .2rem
      padding-bottom .2rem
      color #4c4c4c
    .act
      color #996600
      border-bottom 3px solid #996600
    .selector-cla
      float right
      margin-right 1rem
      padding-bottom .2rem
      .classify
        float left
      .down
        margin-left .2rem
</style>


