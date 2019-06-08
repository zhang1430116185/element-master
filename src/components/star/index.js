const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'
export default {
  name: 'star',
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
},
  data(){
    return {

    }
  },
  created(){

  },
  computed: {
    starType() {
      return 'star-' + this.size;
    },
    staritem (){
      let arr=[];//结果数组
      let score = Math.floor(this.score * 2) / 2;//全亮数
      let hasDecimal = score % 1 !== 0;//半亮数
      let integer = Math.floor(score);//全灭数
      for (let i=0;i<integer;i++){
        arr.push(CLS_ON)
      }
      if (hasDecimal) {
        arr.push(CLS_HALF)
      }
      while (arr.length < LENGTH) {
        arr.push(CLS_OFF)
      }
      return arr
      alert(arr);
    }
  },
  methods:{

  }
}
