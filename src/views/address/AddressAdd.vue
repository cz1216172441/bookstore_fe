<template>
  <div class="address-add">
    <van-nav-bar title="添加收货地址"
      left-arrow
      @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      save-button-text="添加"
      :search-result="searchResult"
      @save="onSave"
    />
  </div>  
</template>

<script>
import address from '@/common/api/address'
import areaList from '@/common/data/areaList.js'
import { Toast } from 'vant';
export default {
  name: 'AddressAdd',
  data() {
    return {
      areaList,
      searchResult: []
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/address')
    },

    onSave(addressInfo) {
      const params = {
        receiverName: addressInfo.name,
        areaId: addressInfo.areaCode,
        postalCode: addressInfo.postalCode,
        addressDetail: addressInfo.addressDetail,
        receiverPhone: addressInfo.tel,
        addressStatus: addressInfo.isDefault
      }
      address.addAddress(params).then(res => {
        if (res.code === 0) {
          Toast.success("添加成功")
          this.$router.push("/address")
        } else {
          Toast("添加失败")
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>


