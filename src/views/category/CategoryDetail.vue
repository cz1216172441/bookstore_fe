<template>
  <div class="category-detail">
    <home-search-box />
    <home-selector :title="title"
      :cateStatus="cateStatus"
      @categoryStatusChange="categoryStatusChange" />
    <van-loading class="category-loading"
      v-if="loading" color="#1989fa" />
    <home-category :category="secCategory"
      generation="sec"
      v-if="categoryStatus" />
    <book-list :bookList="bookList" />
  </div>  
</template>

<script>
import HomeSelector from '@/common/components/HomeSeletor'
import HomeCategory from '@/common/components/HomeCategory'
import HomeSearchBox from '@/common/components/HomeSearchBox'
import BookList from '@/common/components/BookList'
import book from '@/common/api/book'
export default {
  name: 'CategoryDetail',
  components: {
    HomeSearchBox,
    HomeSelector,
    HomeCategory,
    BookList
  },
  data() {
    return {
      title: '',
      categoryStatus: false,
      cateStatus: true,
      secCategory: [],
      loading: true,
      bookList: []
    }
  },
  created() {
    this.getSecCategory(),
    this.getCategoryName(),
    this.listBookByCategory(1, 10)
  },
  methods: {
    // 获取二级分类列表
    getSecCategory() {
      const id = this.$route.params.id
      const params = {
        superCategoryId: id
      }
      book.listSecCategory(params).then((res) => {
        if (res.code === 0) {
          const data = res.data
          if (data.length === 0) {
            this.cateStatus = false
          }
          this.secCategory = data
          this.loading = false
        }
      })
    },

    // 获取图书分类名
    getCategoryName() {
      const id = this.$route.params.id
      const params = {
        categoryId: id
      }
      book.getCategoryName(params).then((res) => {
        if (res.code === 0) {
          const data = res.data
          this.title = data.name
        }
      })
    },

    // 获取图书列表
    listBookByCategory(pageNum, pageSize) {
      const id = this.$route.params.id
      const params = {
        categoryId: id,
        pageNum: pageNum,
        pageSize: pageSize
      }
      book.listBookByCategory(params).then((res) => {
        if (res.code === 0) {
          const data = res.data
          this.bookList = data
          console.log(data)
        }
      })
    },

    categoryStatusChange(status) {
      this.categoryStatus = status
    }
  }
}
</script>

<style lang="stylus" scoped>
  .category-detail
    .category-loading
      z-index 9999
      margin 50% auto
</style>


