<template>
  <div class="login" ref="wrapper">
    <div class="content">
      <bs-logo class="logo" tips="login in" />
      <div class="login-block">
        <bs-input type="text"
          label="用户名"
          :value="username"
          :default="getUsername"
          @valueChanged="usernameChanged"
          placeholder="请输入用户名" />
        <bs-input type="password"
          label="密码"
          :value="password"
          :default="getPassword"
          @valueChanged="passwordChanged"
          placeholder="请输入密码" />
        <van-checkbox v-model="checked"
          class="login-remember">是否记住密码</van-checkbox>
        <span class="pass-alter">
          <router-link to="/auth">
            忘记密码
          </router-link>
        </span>
      </div>
      <bs-button class="login-button" 
        label="登 录"
        :click="userLogin" />
      <span class="register-label">
        <router-link to="/register">新用户? 注册</router-link>
      </span>
    </div>
  </div>  
</template>

<script>
import BScroll from 'better-scroll'
import BsLogo from '@/common/components/BsLogo'
import BsInput from '@/common/components/BsInput'
import BsButton from '@/common/components/BsButton'
import { checkOutLoginParams } from '@/common/utils/check.js'
import { mapGetters, mapMutations } from 'vuex'
import user from '@/common/api/user'
import { Toast } from 'vant'
export default {
  name: 'Login',
  components: {
    BsInput,
    BsLogo,
    BsButton
  },
  data() {
    return {
      img: './logo.png',
      username: '',
      password: '',
      checked: false
    }
  },
  computed: {
    ...mapGetters([
      'getToken',
      'getUsername',
      'getPassword',
      'getRemembered'
    ])
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
      this.username = this.getUsername
      this.password = this.getPassword
      this.checked = this.getRemembered
    })
  },
  methods: {
    ...mapMutations([
      'SET_USERNAME',
      'SET_PASSWORD',
      'SET_REMEMBERED',
      'SET_TOKEN'
    ]),

    /**
     * 用户登录
     */
    userLogin() {
      const params = {
        'username': this.username,
        'password': this.password,
        'remembered': this.checked
      }
      if (checkOutLoginParams(params)) {
        user.login(params).then((res) => {
          if (res.code === 0) {
            Toast.success("登录成功", 1000)
            const data = res.data
            this.SET_TOKEN(data.token)
            // 记住用户名与密码
            if (params.remembered) {
              this.SET_USERNAME(params.username)
              this.SET_PASSWORD(params.password)
              this.SET_REMEMBERED(params.remembered)
            } else {
              localStorage.removeItem('username')
              localStorage.removeItem('password')
              localStorage.removeItem('remembered')
            }
            this.$router.push('/')
          } else {
            Toast.fail("登录失败", 1000)
          }
        })
      }
    },

    /** 
     * 自定义输入框组件
     * 双向数据绑定
     */
    usernameChanged(model) {
      this.username = model
    },
    passwordChanged(model) {
      this.password = model
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
    .content
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
        margin-top 3rem
      .register-label
        display inline-block
        margin 1rem auto
        width 100%
        text-align center
        bottom 3.5rem
        font-size 12px
        a
          color rgba(253, 89, 113, .6)
          text-decoration underline
</style>