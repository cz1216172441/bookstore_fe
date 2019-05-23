<template>
  <div class="login">
    <bs-logo class="logo" />
    <div class="login-block">
      <bs-input type="text"
        label="用户名"
        v-model="username"
        placeholder="请输入用户名" />
      <bs-input type="password"
        label="密码"
        v-model="password"
        placeholder="请输入密码" />
      <van-checkbox v-model="checked"
        class="login-remember">是否记住密码</van-checkbox>
      <span class="pass-alter">
        <router-link to="/auth">
          忘记密码
        </router-link>
      </span>
    </div>
    <van-button class="login-button" 
      type="default">登 录</van-button>
    <span class="register-label">
      <router-link to="/register">新用户? 注册</router-link>
    </span>
  </div>  
</template>

<script>
import BsLogo from '@/common/components/BsLogo'
import BsInput from '@/common/components/BsInput'
export default {
  name: 'Login',
  components: {
    BsInput,
    BsLogo
  },
  data() {
    return {
      img: './logo.png',
      username: '',
      password: '',
      checked: false
    }
  }
}
</script>

<style lang="stylus">
  .login
    display flex
    flex-direction column
    justify-content center
    width 100%
    height 100vh
    color #4c4c4c
    .logo
      position absolute
      top 3rem
    .login-block
      width auto
      height 12.5rem
      margin 0 2rem
      .login-remember
        display inline-block
        float left
        font-size 12px
        margin-top 1rem
        letter-spacing .04rem
        .van-checkbox__label
          color rgba(0, 0, 0, .4)
          margin-left 0px
          transform scale(.875)
      .pass-alter
        display inline-block
        margin-top .3rem
        height 40px
        line-height 40px
        font-size 12px
        transform scale(.875)
        letter-spacing .1rem
        float right
        a
          color #6AAFE6
    .login-button
      position absolute
      bottom 3.5rem
      width 12rem
      left 50%
      transform translate(-50%, -50%)
      color #fff
      background linear-gradient(to right, rgba(253, 89, 113, .9), rgba(253, 138, 103, .9))
      border 1px solid rgba(253, 138, 103, .9)
    .register-label
      position absolute
      width 100%
      text-align center
      bottom 3.5rem
      font-size 12px
      a
        color rgba(253, 89, 113, .6)
        text-decoration underline
</style>