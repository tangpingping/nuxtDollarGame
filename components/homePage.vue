<template>
    <div id="content">
        <div class="home_p">
            <div class="box first">
                <img src="../assets/image/pc/first.png" class="bg"/>
                <div>
                    <a href="//t.cn/RkDAVok"><img src="../assets/image/pc/android_download.png" class="android_download" id="android_download"/></a>
                    <img src="../assets/image/pc/android_code_download.png" class="android_code" id="android_code"/>
                    <!--<img src="../assets/image/pc/android_code_download.png" class="iphone_code" id="iphone_code"/>-->
                    <a href="javascript:void(0)"><img src="../assets/image/pc/iphone_download.png" class="iphone_download" id="iphone_download"/></a>
                </div>
                <div class="first_text">
                    <span>随时随地,一块抓娃娃</span>
                </div>
            </div>
            <div class="box">
                <img src="../assets/image/pc/second.png" class="bg"/>
                <div class="text">
                    <span class="title"><span class="text_color">一元</span>就能玩</span>
                    <br>
                    <span class="english_title">Palm grab doll</span>
                    <br>
                    <span class="content_text">仅需一元，轻松开玩，随时随地，抓娃娃啦</span>
                </div>
            </div>
            <div class="box">
                <img src="../assets/image/pc/third.png" class="bg"/>
                <div class="text_left">
                    <span class="title"><span class="text_color">奢侈品</span>也能抓</span>
                    <br>
                    <span class="english_title">Very much luxury</span>
                    <br>
                    <span class="content_text">想要奢侈品，就来一块抓娃娃，奢侈品抓不停</span>
                </div>
            </div>
            <div class="box">
                <img src="../assets/image/pc/forth.png" class="bg"/>
                <div class="text">
                    <span class="title"><span class="text_color">免费</span>玩</span>
                    <br>
                    <span class="english_title">Free to play</span>
                    <br>
                    <span class="content_text">邀请好友，免费抓娃娃，和好友一块抓娃娃</span>
                </div>
            </div>
            <div class="box">
                <img src="../assets/image/pc/fifth.png" class="bg"/>
                <div class="text_left">
                    <span class="title"><span class="text_color">每天</span>抓娃娃</span>
                    <br>
                    <span class="english_title">Come and play every day</span>
                    <br>
                    <span class="content_text">签到免费送金币，天天签到，天天抓娃娃</span>
                </div>
                <img src="../assets/image/pc/top.png" class="top" @click="backTop"/>
            </div>
        </div>
        <div class="home_m">
            <div class="box first">
                <img src="../assets/image/m/first.png" class="bg"/>
                <div class="btn_download">
                    <a href="//t.cn/RkDAVok"><img src="../assets/image/m/download_white.png"/></a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/image/m/second.png" class="bg"/>
                <div class="btn_download">
                    <a href="//t.cn/RkDAVok"><img src="../assets/image/m/download_blue.png"/></a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/image/m/third.png" class="bg"/>
                <div class="btn_download">
                    <a href="//t.cn/RkDAVok"><img src="../assets/image/m/download_blue.png"/></a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/image/m/forth.png" class="bg"/>
                <div class="btn_download">
                    <a href="//t.cn/RkDAVok"><img src="../assets/image/m/download_blue.png"/></a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/image/m/fifth.png" class="bg"/>
                <div class="btn_download">
                    <a href="//t.cn/RkDAVok"><img src="../assets/image/m/download_white.png"/></a>
                </div>
                <img src="../assets/image/m/top.png" class="top" @click="backTop"/>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'homePage',
    data () {
      return {}
    },
    mounted: function () {
      document.getElementById('android_download').addEventListener('mouseover', function () {
        document.getElementById('android_code').style.display = 'block'
      })
      document.getElementById('android_download').addEventListener('mouseleave', function () {
        document.getElementById('android_code').style.display = 'none'
      })
      // document.getElementById('iphone_download').addEventListener('mouseover', function () {
      //   document.getElementById('iphone_code').style.display = 'block'
      // })
      // document.getElementById('iphone_download').addEventListener('mouseleave', function () {
      //   document.getElementById('iphone_code').style.display = 'none'
      // })
    },
    methods: {
      backTop: function () {
        // 回到顶部
        (function smoothscroll () {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
          if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll)
            window.scrollTo(0, currentScroll - (currentScroll / 5))
          }
        })()
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../assets/css/homePage";
</style>
