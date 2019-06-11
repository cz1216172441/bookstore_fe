<template>
  <div class="address">
    <van-nav-bar title="收货地址"
      left-arrow
      @click-left="onClickLeft" />
    <van-address-list
      :list="list"
      v-model="chosenAddressId"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>  
</template>

<script>
import address from '@/common/api/address'
export default {
  name: 'Address',
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      list: [],
      chosenAddressId: 0
    }
  },
  created() {
    this.listAddress()
  },
  methods: {
    // 获取地址列表
    listAddress() {
      const params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      address.listAddress(params).then(res => {
        if (res.code === 0) {
          const data = res.data
          data.forEach(element => {
            const elem = {
              id: element.id,
              name: element.name,
              tel: element.phone,
              address: element.area + element.address
            }
            if (element.default) {
              this.chosenAddressId = element.id
            }
            this.list.push(elem)
          })
        }
      })
    },

    onClickLeft() {
      this.$router.push('/user')
    },

    onAdd() {
      this.$router.push('/address/add')
    },

    onEdit(item, index) {
      this.$router.push('address/edit/' + item.id)
    }
  }
}
</script>

<style lang="stylus">
  .van-button--danger
    background linear-gradient(to right, rgba(253, 89, 113, .9), rgba(253, 138, 103, .9))
    border 1px solid rgba(253, 138, 103, .9)
</style>
