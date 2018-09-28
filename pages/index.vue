<template>
    <div class="hello">
        <header-nav :highlight="index"></header-nav>
        <home-page></home-page>
        <common-footer></common-footer>
    </div>
</template>

<script>
  import headerNav from '~/components/_header'
  import homePage from '~/components/homePage'
  import commonFooter from '~/components/_footer'
  export default {
    components: {
      headerNav,
      homePage,
      commonFooter
    },
    data () {
      return {
        index: 0
      }
    }
  }
</script>

<style lang="scss">
</style>

