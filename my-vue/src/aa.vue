<template>
  <div>{{res}}</div>
</template>
<script>
import pusa from '../src/pages/pusa'
export default {
  data () {
    return {
      res:'158'
    }
  },
  mounted() {
       
  },
  created () {

  },
  updated () {
   
  },
  activated () {
    console.log(1569);
    
      pusa.$on('sasa',(data)=>{
        this.res = data
        })
  }

}
</script>

