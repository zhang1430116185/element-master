/**
 * Created by weimingye on 2017/6/30.
 */
export default {
  name : 'cart',
  props: ['seller'],
  data () {
    return {

    }
  },
  created() {

  },
  computed:{
    payDesc(){
      let diff =  this.seller.minPrice-this.$store.state.grossAmount
      if (!this.$store.state.grossAmount) {
        return '￥'+this.seller.minPrice+'起送'
      } else if (diff > 0) {
        return '还差￥'+diff+'元'
      } else{
        return '去结算'
      }
    }
  }
}
