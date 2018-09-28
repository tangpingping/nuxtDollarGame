module.exports = {
  modules: [
    ['@nuxtjs/axios', {
      credentials: false,
      proxyHeaders: false
    }]
  ],
  axios: {
    proxyHeadersIgnore: ['host', 'accept', 'cf-ray', 'cf-connecting-ip']
  },
  debug: true,
  // [bug]只有全局引入了 才能加载其中的url image 问题至今没找到 //zww.forkeji.com  //192.168.2.142
  css: [{src: '~assets/dynamic.scss', lang: 'scss'}],
  env: {
    baseUrl: 'https://zww.forkeji.com'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '一块抓娃娃-随时随地一块抓娃娃，用手机就能抓',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '一块抓娃娃官网、抓娃娃机游戏、抓娃娃app、抓娃娃手机游戏、在线抓娃娃游戏下载、抓娃娃机技巧、抓娃娃应用、抓娃娃游戏推荐'},
      { hid: 'description', name: 'description', content: '一块抓娃娃，仅需一块钱，和家人，朋友，同学一块抓娃娃。国内最便宜的手机抓娃娃应用，大神教你抓娃娃，送你抓娃娃，夹娃娃，技巧攻略秘籍。想学大神如何抓娃娃，就来一块抓娃娃' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/ow/static/wawa_icon.ico' }
    ]
  },
  /*
  * plugins axios
  * */
  plugins: [{ src: '~plugins/axios.js'}],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/ow/_nuxt/',
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      // const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader');
      // vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader';
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

