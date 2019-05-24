<template>
  <div class="register">
    <bs-logo class="re-logo" />
    <div class="register-block">
      <bs-input type="text"
        label="用户名"
        :value="username"
        @valueChanged="usernameChanged"
        placeholder="请输入用户名" />
      <bs-input type="password"
        label="密码"
        :value="password"
        @valueChanged="passwordChanged"
        placeholder="请输入密码" />
      <bs-input type="password"
        :value="rePassword"
        @valueChanged="rePasswordChanged"
        placeholder="请再次输入密码" />
    </div>
    <bs-button class="register-button"
      label="注 册"
      @click.native="userRegister" />
  </div>
</template>

<script>
import BsLogo from '@/common/components/BsLogo'
import BsInput from '@/common/components/BsInput'
import BsButton from '@/common/components/BsButton'
import { Toast } from 'vant'
import { mapActions } from 'vuex';
export default {
  name: 'Register',
  components: {
    BsLogo,
    BsInput,
    BsButton
  },
  data() {
    return {
      username: '',
      password: '',
      rePassword: ''
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),

    /**
     * 用户注册
     */
    userRegister() {
      if (this.password === this.rePassword) {
        const params = {
          username: this.username,
          password: this.password
        }
        this.register(params)
      } else {
        Toast('密码不一致')
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
    },
    rePasswordChanged(model) {
      this.rePassword = model
    }
  }
}
</script>

<style lang="stylus" scoped>
  .register
    width 100%
    height 100vh
    display flex
    flex-direction column
    justify-content center
    color #4c4c4c
    .re-logo
      position absolute
      top 2rem
    .register-block
      width auto 
      margin 0 2rem
    .register-button
      position absolute
      bottom 3rem
      left 50%
      transform translate(-50%, -50%)
</style>
