<template>
    <div>
        <header-nav :highlight="index"></header-nav>
        <div class="content_dynamic">
            <nuxt-child></nuxt-child>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
  import headerNav from '~/components/_header'
  import commonFooter from '~/components/_footer'
  export default {
    name: 'dynamic',
    components: {
      headerNav,
      commonFooter
    },
    data () {
      return {
        index: 1
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
