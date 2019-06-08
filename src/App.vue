<template>
  <div id="app">
    <headTop :seller= "seller"></headTop>  <!--这是头部组件-->
    <div class="tab">
      <div class="tab_item">
        <router-link :to="{ path:'/'}" tag="a">商品</router-link>
      </div>
      <div class="tab_item">
        <router-link :to="{ path:'/ratings'}" tag="a">评价</router-link>
      </div>
      <div class="tab_item">
        <router-link :to="{ path:'/seller'}" tag="a">商家</router-link>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view :goods= "goods"></router-view>
      </keep-alive>
    </transition>
    <cartShop :seller= "seller"></cartShop>
  </div>
</template>

<script>
  import head from './components/header/header'
  import cart from './components/cart/cart'
  export default {
    name: 'app',
    components: {
      headTop: head,
      cartShop: cart
    },
    data () {
      return {
        seller: '',
        goods: ''
      }
    },
    created () {
      this.$http({
        method: 'get',
        url: 'http://localhost:8001/api/seller'
      }).then((response) => {
        this.seller = response.data.data
      }, () => {

      })
      this.$http({
        method: 'get',
        url: 'http://localhost:8001/api/goods'
      }).then((response) => {
        this.goods = response.data.data
      }, () => {

      })
    }
  }
</script>

<style lang="stylus">
  @import "/common/style/index"
  html,body{
    margin:0
    padding:0
    position:relative
    width:100%
    height:100%
    #app{
      width:100%
      height:100%
    //这是导航tab
      .tab{
        display: -webkit-flex
        display:flex
        height:28px
        text-align:center
        line-height:28px
        font-size:14px
        color:rgb(77,85,93)
        background-color:#fff
        box-shadow: 0 1px 1px rgba(17,27,220,0.1);
        .tab_item{
          flex:1
          flex-direction: row
          a{
            text-decoration:none
            font-size:14px
            line-height:14px
            color:rgb(77,85,93)
          }
          .router-link-exact-active{
            color rgb(240,20,20)
          }
        }

      }
      .lineBorder{
       /* border-bottom:1px solid rgba(7,17,27,0.1)*/
      }
      /* Retina 适配 */
      @media only screen and (-webkit-min-device-pixel-ratio: 2.0),
      only screen and (min--moz-device-pixel-ratio: 2.0),
      only screen and (-o-min-device-pixel-ratio: 200/100),
      only screen and (min-device-pixel-ratio: 2.0) {
        .lineBorder{
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
        }
      }
      /* 三倍屏 适配 */
      @media only screen and (-webkit-min-device-pixel-ratio: 2.5),
      only screen and (min--moz-device-pixel-ratio: 2.5),
      only screen and (-o-min-device-pixel-ratio: 250/100),
      only screen and (min-device-pixel-ratio: 2.5) {
        .lineBorder {
          -webkit-transform: scaleY(0.33333334);
          transform: scaleY(0.33333334);
        }
      }
    }
    .fade-enter-active, &.fade-leave-active {
      transition: opacity 1s
    }
    .fade-enter, &.fade-leave-active {
      opacity: 0
    }
  }
</style>
