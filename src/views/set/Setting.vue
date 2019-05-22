<template>
  <div class="setting">
    <van-nav-bar title="个人资料"
      left-arrow
      @click-left="onClickLeft" />
    <van-list v-model="loading"
      :finished="finished" >
      <van-cell>
        <span class="user-info">基本信息</span>  
      </van-cell>
      <van-cell>
        <span class="head-title">头像</span>
        <span class="head-img">
          <img class="head-portrait" :src="headPortrait">    
          <van-icon class="head-arrow" name="arrow" />
        </span>  
      </van-cell>
      <van-cell>
        <span class="head-title">昵称</span>
        <span class="head-img">
          <span>{{nickname}}</span>
          <van-icon class="head-arrow" name="arrow" />
        </span>
      </van-cell>
      <van-cell>
        <span class="user-info">密保信息</span>  
      </van-cell>
      <van-cell>
        <span class="head-title">手机号码</span>
        <span class="head-img">
          <span>{{phone}}</span>
          <van-icon class="head-arrow"
            name="plus"
            v-if="phone==''" />
        </span>
      </van-cell>
      <van-cell>
        <span class="head-title">电子邮箱</span>
        <span class="head-img">
          <span>{{email}}</span>
          <van-icon class="head-arrow" 
            name="plus"
            v-if="email==''" />
        </span>
      </van-cell>
      <van-cell>
        <span class="head-title">账号安全</span>
        <span class="head-img">
          <van-icon class="head-arrow" name="arrow" />
        </span>
      </van-cell>
    </van-list>
    <van-button class="logout" type="default">退出登录</van-button>
  </div>  
</template>

<script>
export default {
  name: 'Setting',
  data() {
    return {
      loading: false,
      finished: true,
      nickname: 'noTalent',
      headPortrait: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2229346952,2661940409&fm=27&gp=0.jpg',
      phone: '131******34',
      email: '123456789@qq.com'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/my')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .setting
    width 100%
    height 100%
    letter-spacing .02rem
    .user-info
      color rgba(0, 0, 0, .4)
      font-size 12px
  .head-title
    float left
    line-height 2rem
  .head-img
    display flex
    float right
    line-height 2rem
    font-size 12px
    color rgba(0, 0, 0, .4)
    .head-portrait
      width 2rem
      height 2rem
      border-radius 1rem
    .head-arrow
      line-height 2rem
      color rgba(0, 0, 0, .5)
  .logout
    position absolute
    bottom 2rem
    left 0
    right 0
    width 40%
    margin-left auto 
    margin-right auto
</style>

