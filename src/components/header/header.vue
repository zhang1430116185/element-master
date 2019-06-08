<template>
  <div class="topContent" v-if="seller">
    <img :src="seller.avatar" alt="" class="bgcolor">
    <div class="left">
      <img :src="seller.avatar" class="logo">
    </div>
    <div class="right">
      <i class="logoImg"></i>
      <h2>{{seller.name}}</h2>
      <p>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
      <div class="tips">
        <span :class="classMap[seller.supports[0].type]" class="tipsImg"></span>
        <p>{{seller.supports[0].description}}</p>
      </div>
      <span class="cover" @click="showlayer">
        <p>{{seller.supports.length}}个</p>
      </span>
    </div>
    <div class="bottom" @click="showlayer">
      <p>{{seller.bulletin}}</p>
    </div>
    <transition name="fade">
        <div v-if="detailShow" class="transition">
      <h3 class="title">{{seller.name}}</h3>
      <star :size="48" :score="seller.score"></star>
      <div class="specialOffers">
        <h3 class="information">优惠信息</h3>
        <span class="linelr-color"></span>
        <span class="linerl-color"></span>
        <ul class="supportsList">
          <li v-for="sup in seller.supports"><i v-show="sup.type>=0" :class="classMap[sup.type]" class="icons"></i>{{sup.description}}</li>
        </ul>
      </div>
      <div class="specialOffers">
        <h3 class="information">商家公告</h3>
        <span class="linelr-color"></span>
        <span class="linerl-color"></span>
        <p class="announcement">{{seller.bulletin}}</p>
      </div>
      <span class="icon-close closeShow" @click="hidelayer"></span>
    </div>
    </transition>
  </div>
</template>
<script src="./index.js"></script>
<style lang="stylus" rel="stylesheet/stylus">
  //这是顶部内容区域
  .topContent{
    background-color:rgba(7,17,27,0.5)
    width:100%
    position:relative
    .bgcolor{
      width:100%
      height:100%
      z-index:-1
      position:absolute
      -webkit-filter: blur(10px)
      -moz-filter: blur(10px)
      -ms-filter: blur(10px)
      filter: blur(10px)
    }
    .left{
      position:absolute
      width:88px
      height:106px
      .logo{
        border-radius:4px
        margin-left:24px
        margin-top:24px
        width:64px
        height:64px
      }
    }
    .right{
      height:106px
      width:100%
      padding-left:104px
      box-sizing: border-box
      position:relative
      .logoImg{
          display:inline-block
          width:36px
          height:18px
          background:url("./brand@2x.png")
          background-size:100%
      }
      h2{
        display:inline-block
        -webkit-box-sizing:border-box
        -moz-box-sizing:border-box
        box-sizing:border-box
        height:18px
        margin-top:24px
        line-height:18px
        font-size:16px
        color:rgb(255,255,255)
        font-weight:bold
        overflow:hidden
      }
      p{
        overflow:hidden
        color:#fff
        margin-top:8px
        font-weight:200px
        font-size:12px
        line-height:12px
      }
      .tips{
        overflow:hidden
        margin-top:10px
        overflow:hidden
        .tipsImg{
          display:inline-block
          width:12px
          height:12px
          vertical-align:baseline
          &.decrease{
            background:url("./decrease_1@2x.png")
            background-size:contain
          }
          &.discount{
            background:url("./discount_1@2x.png")
            background-size:contain
          }
          &.guarantee{
            background:url("./guarantee_1@2x.png")
            background-size:contain
          }
          &.invoice{
            background:url("./invoice_1@2x.png")
            background-size:contain
          }
          &.special{
            background:url("./special_1@2x.png")
            background-size:contain
          }
        }
        p{
          overflow:hidden
          height:12px
          margin-top:0px
          display:inline-block
          color:#fff
          font-weight:200px
          line-height:12px
          font-size:12px
        }
      }
      .cover{
        overflow:hidden
        position:absolute
        bottom: 18px
        right:12px
        display:inline-block
        height:24px
        width:38px
        -webkit-border-radius:16px
        -moz-border-radius:16px
        border-radius:16px
        background-color:rgba(0,0,0,0.2)
        p{
          display:inline-block
          font-size:10px
          color:#ffffff
          font-weight:200px
          line-height:12px
          margin-top: 6px;
          margin-left: 5px;
        }
        &::after{
          content:'>'
          color:#ffffff
          font-weight:200px
          line-height:12px
          font-family:Consolas
          padding-left:2px
        }
      }
    }
    .bottom{
      height:28px
      width:100%
      background-color:rgba(7,17,27,0.2);
      &::before{
        content:''
        width:22px
        height:12px
        background:url("./bulletin@2x.png")
        background-size:100%
        position:absolute
        left:12px
        bottom:9px
      }
      p{
        overflow:hidden
        width:100%
        font-size:10px
        color:#ffffff
        font-weight:200
        line-height:28px
        padding-left:38px
        padding-right:16px
        overflow:hidden
        text-overflow:ellipsis
        white-space:nowrap
        -webkit-box-sizing:border-box
        -moz-box-sizing:border-box
        box-sizing:border-box
      }
      &::after{
        content:'>'
        width:22px
        height:12px
        position:absolute
        right: -6px;
        bottom: 8px;
        font-size:10px
        color:#ffffff
        font-weight:200px
        line-height:12px
        font-family:Consolas
      }
    }
    .transition{
      position fixed
      top:0
      left:0
      z-index:999999
      width:100%
      height:100%
      background:rgba(7,17,27,0.8)
      backdrop-filter:blur(10px)
      .title{
        margin-top:64px
        text-align:center
        color:#ffffff
        font-weight:700
        font-size:16px
        line-height:16px
        margin-bottom:16 px
      }
      .specialOffers{
        margin:28px 36px
        position:relative
        .information{
          height:14px
          width:100%
          display:inline-block
          text-align:center
          font-size:14px
          font-weight:700
          color:#ffffff
          line-height:14px
        }
        .linelr-color{
          float:left
          border-top:1px solid rgba(255,255,255,0.2)
          width:112px
          display:inline-block
          margin-top: -10px;
        }
        .linerl-color{
          float:right
          border-top:1px solid rgba(255,255,255,0.2)
          width:112px
          display:inline-block
          margin-top: -10px;
        }
        .supportsList{
          margin-top:24px
          font-size:12px
          font-weight:200
          color:#fff
          line-height:12px
          text-align:left
          li{
            margin-bottom:13px
            margin-left:12px
            .icons{
                display:inline-block
                width:18px
                height:18px
                margin-right:6px
                vertical-align:middle
                &.decrease{
                  background:url("./decrease_2@2x.png")
                  background-size:contain
                }
                &.discount{
                  background:url("./discount_2@2x.png")
                  background-size:contain
                }
                &.guarantee{
                  background:url("./guarantee_2@2x.png")
                  background-size:contain
                }
                &.invoice{
                  background:url("./invoice_2@2x.png")
                  background-size:contain
                }
                &.special{
                  background:url("./special_2@2x.png")
                  background-size:contain
                }
              }
          }
        }
      }
      .announcement{
        font-size:12px
        font-weight:200
        color:#ffffff
        line-height:24px
        margin:24px 12px 0
      }
      .closeShow{
        display:inline-block
        position:absolute
        width:100%
        height:36px
        bottom:32px
        color:rgba(255,255,255,0.5)
        font-size:32px
        text-align:center
        padding:2px 0;
        -webkit-box-sizing:border-box
        -moz-box-sizing:border-box
        box-sizing:border-box
        &:before{
          border:2px solid rgba(255,255,255,0.5)
          border-radius:50%
        }
      }
      &.fade-enter-active, &.fade-leave-active {
        transition: opacity .8s
      }
      &.fade-enter, &.fade-leave-active {
        opacity: 0
      }
    }
  }
</style>
