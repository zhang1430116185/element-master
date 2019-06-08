<template>
  <div id="cart">
    <div class="numicon" v-show="$store.state.numcount>0">{{$store.state.numcount}}</div>
    <div class="cartLeft">
      <div class="cartImg icon-shopping_cart" :class="{'cartImgactive':$store.state.numcount>0}"></div>
    </div>
    <span class="figure" :class="{'fig':$store.state.numcount>0}">&yen;{{$store.state.grossAmount}}</span>
    <span class="line_color"></span>
    <span class="shippingFee">另需配送费{{seller.deliveryPrice}}元</span>
    <span class="allMoney" :class="$store.state.grossAmount>=seller.minPrice?'allMoney colorMoney':'allMoney'">{{payDesc}}</span>
  </div>
</template>
<style lang="stylus">
  #cart{
    height:44px
    width:100%
    background-color:#141d27
    position:fixed
    z-index:999
    bottom:0px
    .cartLeft{
      display:inline-block
      position:fixed
      z-index:99997
      left:0px
      bottom:0px
      width:58px
      height:58px
      margin-left:12px
      margin-bottom:0px
      background-color:#141d27
      border-radius:50%
      .cartImg{
        display:inline-block
        z-index:99998
        width:44px
        height:44px
        border-radius:50%
        margin:6px 7px 8px
        background:rgba(255, 255, 255, 0.2)
        font-size:24px
        line-height:24px
        text-align:center
        padding-top: 12px
        color:rgba(255, 255, 255, 0.4)

      }
      .cartImgactive{
        background:rgb(6, 160, 220)
        color:#fff
      }
    }
    .numicon{
      position:fixed
      left: 44px;
      bottom: 44px;
      z-index:999999
      display:inline-block
      width:24px
      height:16px
      background-color:rgb(240,20,20)
      color:#ffffff
      font-size:9px
      font-weight:700
      line-height:16px
      box-shadow:0px 2px 4px 0 rgb(0,0,0,0.4)
      text-align:center
      -webkit-border-radius:6px
      -moz-border-radius:6px
      border-radius:6px
    }
    .figure{
      width:50px
      height:24px
      line-height:24px
      display:inline-block
      text-align:center
      color:rgba(255,255,255,0.4)
      margin-left:64px
      margin-top:10px
      font-size:14px
      font-weight:700
    }
    .fig{
      color:rgb(255,255,255)
    }
    .shippingFee{
      line-height:24px
      display:inline-block
      text-align:center
      color:rgba(255,255,255,0.4)
      margin-top:10px
      font-size:14px
    }
    .line_color{
      color:rgba(255,255,255,0.4)
      height:25px
      margin-right:6px
      display:inline-block
      border-left:1px solid rgba(255,255,255,0.1)
    }
    .allMoney{
      display:inline-block
      font-size:14px
      height:100%
      width:90px
      text-align:center
      float:right
      background-color:rgba(255,255,255,0.1)
      color:rgba(255,255,255,0.4)
      line-height:1
      font-weight:500
      line-height:24px
      padding-top:10px
    }
    .colorMoney{
      background-color:#4FD566
      color:#ffffff
    }
  }
</style>
<script src="./index.js"></script>
