<template>
  <div class="starScore" :class="starType">
      <span v-for="staritems in staritem" :class="staritems" class="startstar"></span>
  </div>
</template>
<style lang="stylus">
    .starScore{
      height:22px
      width:100%
      display:inline-block
      text-align: center
      .startstar{
        display inline-block
        background-repeat no-repeat
      }
      &.star-48{
        .startstar{
          width 20px
          height 20px
          margin-right 22px
          &:last-child{
            margin-right 0
          }
          &.on{
            background:url("./star48_on@2x.png");
            background-size 100% 100%
          }
          &.half{
            background:url("./star48_half@2x.png");
            background-size 100% 100%
          }
          &.off{
            background:url("./star48_off@2x.png");
            background-size 100% 100%
          }
        }
      }
      &.star-36{
        .startstar{
          width 20px
          height 20px
          margin-right 22px
          &:last-child{
            margin-right 0
          }
          &.on{
            background:url("./star36_on@2x.png");
            background-size 100% 100%
          }
          &.half{
            background:url("./star36_half@2x.png");
            background-size 100% 100%
          }
          &.off{
            background:url("./star36_off@2x.png");
            background-size 100% 100%
          }
        }
      }
      &.star-24{
        .startstar{
          width 20px
          height 20px
          margin-right 22px
          &:last-child{
            margin-right 0
          }
          &.on{
            background:url("./star24_on@2x.png");
            background-size 100% 100%
          }
          &.half{
            background:url("./star24_half@2x.png");
            background-size 100% 100%
          }
          &.off{
            background:url("./star24_off@2x.png");
            background-size 100% 100%
          }
        }
      }
    }
</style>
<script src="./index.js"></script>
