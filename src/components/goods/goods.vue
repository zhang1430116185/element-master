<template>
  <!--商品-->
  <div class="goods">
    <div class="sidebar">
      <ul class="sidebarList">
        <li v-for="(item,index) in goods" @click="sider=index" :class="sider==index?'sidertab':'sideItem'">
          <span class="itemName">
             <i v-show="item.type>0" :class="classMap[item.type]" class="icon"></i>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="goodsContent">
      <ul class="goodsAllList">
        <li class="goodsList" v-for="(item,index) in goods" @click="selected">
          <div class="tittle">
            <h1>{{item.name}}</h1>
          </div>
          <div class="content" v-for="foodsLIst in item.foods">
            <img :src="foodsLIst.icon" class="icon"> <span class="menu">
                  <p class="menuName">{{foodsLIst.name}}</p>
                <span v-show="foodsLIst.description" class="disc">{{foodsLIst.description}}</span>
                  <div class="sellcount">
                    <span>月售{{foodsLIst.sellCount}}份</span>
                    <span>好评率{{foodsLIst.rating}}%</span>
                  </div>
                  <div class="price">
                      <span class="priceNow">￥{{foodsLIst.price}}</span>
                      <span v-show="foodsLIst.oldPrice" class="priceOld">￥{{foodsLIst.oldPrice}}</span>
                      <div class="cart">
                         <div class="cart_add" @click="countfn(foodsLIst)">
                          <span class="icon-add_circle"></span>
                        </div>
                        <div class="cart_add add_count" v-show="foodsLIst.count>0">{{foodsLIst.count}}</div>
                         <div class="cart_add" @click="minusFn(foodsLIst)" v-show="foodsLIst.count>0">
                          <span class="icon-remove_circle_outline"></span>
                        </div>
                      </div>
                  </div>
                </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="stylus">
  .goods{
    width:100%
    height:100%
    padding-bottom:44px
    .sidebar{
        position:fixed
        height:100%
        background-color:#f3f5f7
        padding-bottom: 210px
      .sidebarList{
        height: 100%;
        overflow-y: scroll
        overflow-x: hidden
        /*direction: rtl*/
        margin-left: -16px
        .sideItem, .sidertab{
          margin-left: 16px
          display:table
          width:80px
          height:54px
          line-height:54px
          background-color:#f3f5f7
          padding:0 10px
          .itemName{
            display:table-cell
            width:56px
            vertical-align:middle
            line-height:14px
            font-size:12px
            font-weight:200
            text-align:center
            height:54px
            border-bottom:1px solid rgba(7, 17, 27, 0.2)
            /* Retina 适配 */
            @media only screen and (-webkit-min-device-pixel-ratio:2.0),
            only screen and (min--moz-device-pixel-ratio:2.0),
            only screen and (-o-min-device-pixel-ratio:200 / 100),
            only screen and (min-device-pixel-ratio:2.0){
              .itemName{
                -webkit-transform:scaleY(0.5);
                transform:scaleY(0.5);
              }
            } /* 三倍屏 适配 */
            @media only screen and (-webkit-min-device-pixel-ratio:2.5),
            only screen and (min--moz-device-pixel-ratio:2.5),
            only screen and (-o-min-device-pixel-ratio:250 / 100),
            only screen and (min-device-pixel-ratio:2.5){
              .itemName{
                -webkit-transform:scaleY(0.33333334);
                transform:scaleY(0.33333334);
              }
            } /*  color:rgb(240,20,20)*/
            .icon{
              display:inline-block
              width:12px
              height:12px
              vertical-align:top
              &.decrease{
                background:url("./decrease_3@2x.png")
                background-size:contain
              }
              &.discount{
                background:url("./discount_3@2x.png")
                background-size:contain
              }
              &.guarantee{
                background:url("./guarantee_3@2x.png")
                background-size:contain
              }
              &.invoice{
                background:url("./invoice_3@2x.png")
                background-size:contain
              }
              &.special{
                background:url("./special_3@2x.png")
                background-size:contain
              }
            }
          }
        }
        .sidertab{
          background-color:#fff
          .itemName{
            border:none
          }
        }
      }
    }
    .goodsContent{
      width:100%
      height:100%
      overflow-y:auto
      padding-left:80px
      background-color:rgb(255, 255, 255)
      -webkit-box-sizing:border-box
      -moz-box-sizing:border-box
      box-sizing:border-box
      .goodsAllList{
        height:100%
        overflow-y:auto
        overflow-x:hidden
        margin-right:-20px
        margin-bottom: 160px;
        .goodsList{
          margin-right:10px
          .tittle{
            background-color:#f3f5f7
            border-left:2px solid #d9dde1
            height:26px
            padding-left:14px
            h1{
              line-height:26px
              color:rgb(147, 153, 159)
              font-size:12px
            }
          }
          .content{
            margin:18px
            display:flex
            padding-bottom:18px
            border-bottom:1px solid rgba(7, 17, 27, 0.1)
            position:relative
            &:last-child{
              padding-bottom:0px
              border:none
            }
            /* Retina 适配 */
            @media only screen and (-webkit-min-device-pixel-ratio:2.0),
            only screen and (min--moz-device-pixel-ratio:2.0),
            only screen and (-o-min-device-pixel-ratio:200 / 100),
            only screen and (min-device-pixel-ratio:2.0){
              .content{
                -webkit-transform:scaleY(0.5);
                transform:scaleY(0.5);
              }
            } /* 三倍屏 适配 */
            @media only screen and (-webkit-min-device-pixel-ratio:2.5),
            only screen and (min--moz-device-pixel-ratio:2.5),
            only screen and (-o-min-device-pixel-ratio:250 / 100),
            only screen and (min-device-pixel-ratio:2.5){
              .content{
                -webkit-transform:scaleY(0.33333334);
                transform:scaleY(0.33333334);
              }
            }
            .icon{
              width:57px
              height:57px
              margin-right:10px
            }
            .menu{
              .menuName{
                font-size:14px
                color:rgb(7, 17, 27)
                line-height:14px
                margin-top:2px
                margin-bottom:6px
                overflow:hidden;
              }
              .disc, .sellcount span{
                font-size:10px
                color:rgb(147, 153, 159)
                line-height:14px
                margin-bottom:8px
              }
              .sellcount{
                overflow:hidden;
                & span:first-child{
                  margin-right:12px
                }
              }
              .price{
                display:inline-block
                height:24px
                width:100%
                .priceNow{
                  font-size:10px
                  font-weight:700
                  line-height:24px
                  color:rgb(240, 20, 20)
                }
                .priceOld{
                  font-size:10px
                  font-weight:700
                  line-height:24px
                  margin-left:8px
                  text-decoration:line-through
                  color:rgb(147, 153, 159)
                }
                .cart{
                  position:absolute
                  width:82px
                  height:22px
                  z-index:200
                  display:inline-block
                  right:0px
                  .cart_add{
                    float:right;
                    height:24px
                    width:24px
                    display:inline-block
                    vertical-align:top
                    font-size:24px
                    color:#00a0dc
                    line-height:24px
                    overflow:hidden
                    & span{
                      display:block
                    }
                  }
                  .add_count{
                    display:inline-block
                    vertical-align:top
                    font-size:10px
                    color:#93999f
                    line-height:24px
                    text-align:center
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
