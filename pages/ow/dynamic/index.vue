<template>
    <div class="dynamic">
        <div class="title">
            <ul class="title_head" id="title_head">
                <li><a href="javascript:void(0)" @click="getAllData($event, -1)" class="text_color text">全部</a></li>
                <li><a href="javascript:void(0)" @click="getAllData($event, 0)" class="text">动态</a></li>
                <li><a href="javascript:void(0)" @click="getAllData($event, 1)" class="text">活动</a></li>
            </ul>
            <span class="title_body">您的位置：一块抓娃娃 > <span class="text_color">动态中心</span></span>
        </div>
        <article-list v-for="item in data1" :dynamic="item" :key="item.id" ></article-list>
        <div class="page">
            <span class="pre" @click="pre">上一页</span>
            <span class="page_size">{{page}}/{{Math.ceil(total/size)}}</span>
            <span class="next" @click="next">下一页</span>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import { getData } from '~/plugins/axios'
  import articleList from '~/components/card'
  export default {
    name: 'dynamicData',
    components: {
      articleList
    },
    data () {
      return {
        data1: [],
        page: 1,
        size: 8,
        type: -1,
        total: 8
      }
    },
    async asyncData ({app}) {
      // axios.get(context.env.baseUrl + '/admin/ar/list', {params: {size: 8, page: 1, type: -1}}).then((res) => {
      //   callback(null, { data1: res.data.data.result, total: res.data.data.total })
      // })
      const res = await app.$axios.$get('https://zww.forkeji.com/admin/ar/list', {params: {size: 8, page: 1, type: -1}})
      return {data1: res.data.result, total: res.data.total}
      // return axios.get('//zww.forkeji.com/admin/ar/list', {params: {size: 8, page: 1, type: -1}}).then((res) => {
      //   return {data1: res.data.data.result, total: res.data.data.total}
      // })
    },
    mounted: function () {
      this.getData()
    },
    methods: {
      getAllData: function (e, type) {
        for (let i = 0; i < document.getElementsByClassName('text').length; i++) {
          document.getElementsByClassName('text')[i].setAttribute('class', 'text')
        }
        e.target.className = 'text text_color'
        this.type = type
        this.page = 1
        this.getData()
      },
      // 获取数据
      getData: function () {
        getData('get', 'admin/ar/list', {size: this.size, page: this.page, type: this.type}, (res) => {
          this.data1 = res.data.data.result
          this.total = res.data.data.total
        })
      },
      next: function () {
        // 下一页
        if ((this.page + 1) <= Math.ceil(this.total / this.size)) {
          this.page = this.page + 1
          this.getData()
        }
      },
      pre: function () {
        if ((this.page - 1) > 0) {
          this.page = this.page - 1
          this.getData()
        }
      }
    }
  }
</script>
<style scoped lang="scss">
    @import "~assets/dynamic";
</style>