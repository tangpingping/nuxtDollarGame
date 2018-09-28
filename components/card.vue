<template>
    <!----------------------------------动态中心的模板文件------------------------------------------------>
    <nuxt-link :to="{path: '/ow/dynamic/content', query: {id: dynamic.id, title: dynamic.title, date: date(dynamic.startDate) + '-' + this.date(dynamic.endDate)}}">
        <div class="card">
            <img :src="dynamic.image" alt="展示图" title="展示图">
            <span class="card_title">{{dynamic.title}}</span>
            <br>
            <div class="status" v-if="dynamic.type === 1">
                <img src="../assets/image/action/rightNow.png" v-if="now < dynamic.startDate"/>
                <img src="../assets/image/action/doing.png" v-else-if="now > dynamic.startDate && now < dynamic.endDate"/>
                <img src="../assets/image/action/over.png" v-else-if="now > dynamic.endDate"/>
            </div>
            <span class="author">{{dynamic.author}}</span>
            <span class="date">{{date(dynamic.startDate)}} - {{date(dynamic.endDate)}}</span>
        </div>
    </nuxt-link>
</template>

<script>
import {formatDate} from '../plugins/date'
export default {
  name: 'card',
  props: ['dynamic'],
  data () {
    return {
      data: {},
      now: new Date().getTime()
    }
  },
  methods: {
    date: function (val) {
      let crtTime = new Date(val)
      return formatDate(crtTime, 'MM/dd')
    },
    views: function () {
      // let date = this.date(this.dynamic.startDate) + '-' + this.date(this.dynamic.endDate)
      // this.$emit('view', {id: this.dynamic.id, title: this.dynamic.title, date: date})
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/card";
</style>
