<template>
  <div class="login">
    <img class="logo" :src="img">
    <span class="bookstore-title">谦谦书城 QianQian</span>
    <span class="login-title">Sign in to continue</span>
    <div class="login-block">
      <div class="login-cell">
        <span class="login-label">用户名</span>
        <input type="text" 
          class="login-input"
          v-bind="username"
          placeholder="请输入用户名" />
      </div>
      <div class="login-cell">
        <span class="login-label">
            密&nbsp;&nbsp;&nbsp;码
        </span>
        <input type="password"
          class="login-input"
          v-bind="username"
          placeholder="请输入密码" />
      </div>
      <van-checkbox v-model="checked"
        class="login-remember">是否记住密码</van-checkbox>
      <span class="pass-alter">
        <router-link to="/auth">
          忘记密码
        </router-link>
      </span>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      img: './logo.png',
      username: '',
      passowrd: '',
      checked: false
    }
  }
}
</script>

<style lang="stylus">
  .login
    width 100%
    height 100%
    color #4c4c4c
    .logo
      display block
      margin 4rem 2rem
      width 4rem
      height 4rem
    .bookstore-title
      display block
      margin -3rem 2rem
      font-size 24px
      font-weight 600
    .login-title
      display block
      margin 3.6rem 2rem
      color rgba(0, 0, 0, .4)
    .login-block
      width auto
      height 12rem
      margin 0 2rem
      .login-cell
        margin-top 1rem
        .login-label
          display block
          height 2rem
          line-height 2rem
          font-size 16px
          font-weight 600
          letter-spacing .1rem
        .login-input
          box-sizing border-box
          width 100%
          padding 10px 0
          font-size 13px
          border 0
          color rgba(0, 0, 0, .6)
          border-bottom 1px solid rgba(0, 0, 0, .1)
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
  .van-checkbox__icon .van-icon
    width 16px
    height 16px
</style>