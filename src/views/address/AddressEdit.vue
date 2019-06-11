<template>
  <div class="address-edit">
    <van-nav-bar title="地址编辑"
      left-arrow
      @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      :address-info="address"
      show-postal
      show-set-default
      show-delete
      show-search-result
      save-button-text="保存"
      @save="onSave"
      @delete="onDelete"
    />
  </div>  
</template>

<script>
import address from '@/common/api/address'
import areaList from '@/common/data/areaList.js'
import { Toast } from 'vant';
export default {
  name: 'AddressEdit',
  data() {
    return {
      areaList,
      address: {}
    }
  },
  created() {
    this.getAddress();
  },
  methods: {
    onClickLeft() {
      this.$router.push('/address')
    },

    // 获取地址信息
    getAddress() {
      const id = this.$route.params.id
      const params = {
        receiverAddressId: id
      }
      address.getAddress(params).then(res => {
        if (res.code === 0) {
          const data = res.data
          this.address = {
            name: data.name,
            areaCode: data.areaId.toString(),
            tel: data.phone,
            addressDetail: data.address,
            postalCode: data.code,
            isDefault: data.default
          }
        }
      })
    },

    // 保存地址
    onSave(addressInfo) {
      const id = this.$route.params.id
      const params = {
        receiverAddressId: id,
        receiverName: addressInfo.name,
        areaId: addressInfo.areaCode,
        postalCode: addressInfo.postalCode,
        addressDetail: addressInfo.addressDetail,
        receiverPhone: addressInfo.tel,
        addressStatus: addressInfo.isDefault
      }
      address.updateAddress(params).then(res => {
        if (res.code === 0) {
          Toast.success("保存成功")
          this.$router.push("/address")
        } else {
          Toast("保存失败")
        }
      })
    },

    // 删除地址
    onDelete(addressInfo) {
      const id = this.$route.params.id
      const params = {
        receiverAddressId: id
      }
      address.deleteAddress(params).then(res => {
        if (res.code === 0) {
          Toast.success("删除成功")
          this.$router.push("/address")
        } else {
          Toast("删除失败")
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  .van-button--danger
    background linear-gradient(to right, rgba(253, 89, 113, .9), rgba(253, 138, 103, .9))
    border 1px solid rgba(253, 138, 103, .9)
</style>