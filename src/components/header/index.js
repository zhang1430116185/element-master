/**
 * Created by weimingye on 2017/6/20.
 */
import star from '../star/star'
export default {
  props: ['seller'],
  components: {
    star,
  },
  data(){
    return {
      detailShow:false
    }
  },
  created(){
    this.classMap = ['decrease','discount','guarantee','invoice','special']
  },
  methods:{
    showlayer () {
      this.detailShow = true;
    },
    hidelayer () {
      this.detailShow = false;
    }
  }
}
