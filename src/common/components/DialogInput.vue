<template>
  <div class="dialog-input">
    <input class="dialog-input-block" 
      type="text"
      v-model="model"
      @input="valueChanged" />
  </div>
</template>

<script>
export default {
  name: 'DialogInput',
  props: {
    value: String
  },
  data() {
    return {
      model: this.value
    }
  },
  methods: {
    valueChanged() {
      this.$emit('valueChanged', this.model)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .dialog-input
    display flex
    justify-content center
    width 100%
    .dialog-input-block
      display block
      width 80%
      margin-top 10px
      margin-bottom 20px
      padding-left 10px
      border 1px solid #eeeeee
      font-size 13px
</style>

