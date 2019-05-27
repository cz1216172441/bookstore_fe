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
          <img class="head-portrait" 
            v-if="getUserInfo.img"
            :src="getUserInfo.img">  
          <van-uploader :after-read="onRead"
            accept="image/png, image/jpeg">
            <van-icon class="head-arrow" name="arrow" />
          </van-uploader>
          <van-dialog
            class="img-dialog"
            v-model="imgShowed"
            title="上传头像"
            show-cancel-button>
            <div class="cropper-content">
              <div class="cropper" style="text-align:center">
                <vueCropper
                  ref="cropper"
                  :img="option.img"
                  :outputSize="option.size"
                  :outputType="option.outputType">
                </vueCropper>
              </div>
            </div>
          </van-dialog>
        </span>  
      </van-cell>
      <van-cell>
        <span class="head-title">昵称</span>
        <span class="head-img">
          <span>{{getUserInfo.nickname}}</span>
          <van-icon class="head-arrow" 
            name="arrow"
            @click="alterNickname" />
          <van-dialog class="alter-dialog"
            v-model="alterFir"
            title="更改昵称"
            show-cancel-button
            @confirm="updateNickname">
            <dialog-input :value="nickname"
              @valueChanged="nicknameChanged" />
          </van-dialog>
          </span>
      </van-cell>
      <van-cell>
        <span class="user-info">密保信息</span>  
      </van-cell>
      <van-cell>
        <span class="head-title">手机号码</span>
        <span class="head-img">
          <span>{{getUserInfo.phone}}</span>
          <van-icon class="head-arrow"
            name="plus"
            v-if="!getUserInfo.phone" />
        </span>
      </van-cell>
      <van-cell>
        <span class="head-title">电子邮箱</span>
        <span class="head-img">
          <span>{{getUserInfo.email}}</span>
          <van-icon class="head-arrow" 
            name="plus"
            v-if="!getUserInfo.email" />
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
import DialogInput from '@/common/components/DialogInput'
import user from '@/common/api/user'
import { mapGetters, mapActions } from 'vuex'
import { VueCropper }  from 'vue-cropper'
import { Toast } from 'vant';
export default {
  name: 'Setting',
  components: {
    DialogInput,
    VueCropper
  },
  data() {
    return {
      loading: false,
      finished: true,
      alterFir: false,
      imgShowed: false,
      nickname: '',
      option: {
        img: '',
        size: 0.8,
        outputType: 'png'
      }
    }
  },
  computed: {
    ...mapGetters([
      'getUserInfo'
    ])
  },
  created() {
    this.GET_USERINFO()
  },
  methods: {
    ...mapActions([
      'GET_USERINFO'
    ]),

    // 返回我的页面
    onClickLeft() {
      this.$router.push('/user')
    },

    // 打开修改昵称弹出窗
    alterNickname() {
      this.alterFir = true
    },

    // 修改昵称
    updateNickname() {
      const params = {
        userNickname: this.nickname
      }
      user.alterUserDetail(params).then((res) => {
        console.log(res)
        if (res.code === 0) {
          this.GET_USERINFO()
          Toast.success('修改成功', 1000)
        } else {
          Toast.fail('修改失败', 1000)
        }
      })
    },

    // 上传头像
    onRead(file) {
      this.option['img'] = file.content
      this.imgShowed = true
      this.$refs.cropper.getCropData((data) => {
        console.log(data)
      })
    },

    // 自定义输入框双向数据绑定
    nicknameChanged(model) {
      this.nickname = model
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
      margin-left .4rem
      color rgba(0, 0, 0, .5)
  .logout
    position absolute
    bottom 2rem
    left 0
    right 0
    width 40%
    margin-left auto 
    margin-right auto
  .alter-dialog
    color #4c4c4c
  .img-dialog
    color #4c4c4c
    .cropper-content
      .cropper
        width 80%
        height auto
</style>

