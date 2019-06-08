/**
 * Created by weimingye on 2017/6/23.
 */

import Vue from 'vue'
import BScroll from 'better-scroll'
export default {
  props: ['goods'],
  data () {
    return {
      sider: 0,//侧边栏自定义变量
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
  },
  methods: {
    countfn (foodsLIst) {
      this.$store.state.numcount++
      if (foodsLIst.count) {
          foodsLIst.count++
        this.$store.state.grossAmount+=foodsLIst.price*(foodsLIst.count-(foodsLIst.count-1))
      } else {
        Vue.set(foodsLIst, 'count', 1)
        this.$store.state.grossAmount+=foodsLIst.price
      }
      this.$store.commit('getAmount')
    },
    minusFn (foodsLIst) {
      this.$store.state.numcount--
      this.$store.state.grossAmount-=foodsLIst.price*(foodsLIst.count-(foodsLIst.count-1))
      foodsLIst.count--
      this.$store.commit('getAmount')
    },
    selected (){

    }
  },
  computed: {
      selecFoods:function(){
        let foods=[]
        this.goods.forEach((good)=>{
          good.foods.forEach((food)=>{
            if (food.count){
              foods.push(food)
            }
          })
        })
        console.log(foods)
        return foods
      }
  }
}
