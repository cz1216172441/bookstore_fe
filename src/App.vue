<template>
  <div id="app" 
       :v-wechat-title="title"
       :img-set="logo">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '谦谦书城',
      logo: './logo.png'
    }
  }
}
</script>

<style lang="stylus">
</style>
