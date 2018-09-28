<template>
    <div class="dynamic">
        <div class="title">
            <ul class="title_head"><li>{{title}}</li></ul>
            <span class="title_body">您的位置：一块抓娃娃 > <nuxt-link to="/dynamic">动态中心</nuxt-link> > <span class="text_color">正文</span></span>
            <span class="title_body date">{{date}}</span>
        </div>
        <span v-if="loading">文章加载中。。。。。。。。请稍后</span>
        <div v-html="html"></div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'index',
    data () {
      return {
        id: this.$route.query.id,
        html: '',
        title: this.$route.query.title,
        date: this.$route.query.date,
        loading: true
      }
    },
    async asyncData ({app, query}) {
      const res = await app.$axios.$get('https://zww.forkeji.com/admin/ar/index', {params: {id: query.id}})
      return {html: res.data, loading: false}
      // return axios.get('//192.168.2.142/admin/ar/index', {params: {id: query.id}}).then((res) => {
      //   return {html: res.data.data, loading: false}
      // })
    },
    mounted: function () {
      // this.$util.ajax('get', '/admin/ar/index', {id: this.id}, (res) => {
      //   this.html = res.data.data
      //   this.loading = false
      // }, this)
    }
  }
</script>

<style scoped lang="scss">
    @import "~assets/dynamic";
</style>
