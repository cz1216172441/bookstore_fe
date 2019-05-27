<template>
  <div class="register" ref="wrapper">
    <div class="content">
      <bs-logo class="re-logo" tips="register" />
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
        :click="userRegister" />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import BsLogo from '@/common/components/BsLogo'
import BsInput from '@/common/components/BsInput'
import BsButton from '@/common/components/BsButton'
import { checkOutRegisterParams } from '@/common/utils/check'
import user from '@/common/api/user'
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
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  },
  methods: {
    ...mapActions([
      'register'
    ]),

    /**
     * 用户注册
     */
    userRegister() {
      const params = {
        username: this.username,
        password: this.password
      }
      if (checkOutRegisterParams(params)) {
        if (this.rePassword === '') {
          Toast('请再次输入密码')
          return false
        }
        if (this.password === this.rePassword) {
          user.register(params).then((res) => {
            if (res.code === 0) {
              Toast.success('注册成功')
              this.$router.push('/login')
            } else {
              Toast.fail('注册失败')
            }
          })
        } else {
          Toast('密码不一致')
        }
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
    .content
      .register-block
        width auto 
        height 14rem
        margin 0 2rem
      .register-button
        margin-top 3rem
</style>
