<template>
  <div>
    <div class="tab">
      <ul>
        <li @click="cur=0" :class="{active:cur==0}">时间</li>
        <li @click="cur=1" :class="{active:cur==1}">行为</li>
        <li @click="cur=2" :class="{active:cur==2}">人</li>
      </ul>
    </div>



    <div v-show="cur==0"><Ntime></Ntime></div>
    <div v-show="cur==1"><beHavior></beHavior></div>
    <div v-show="cur==2"><people></people></div>

    
    <Foter :active="active"></Foter>
  </div>
</template>
<script>
import beHavior from './components/behavior'
import Foter from "@/components/foter";
import Ntime from "./components/Ntime"
import people from "./components/people"
export default {
  data () {
    return {
      cur:0,
      active:null
    }
  },
  components: {
    Foter,
    beHavior,
    Ntime,
    people
  },
  mounted () {
     this.active = this.$route.path
    
  }
};
</script>
<style scoped>
.tab {
  padding: 0.3rem 0 .2rem 0;
}
.tab ul {
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
}
.tab li {
  width: 1.8rem;
  height: 0.5rem;

  border-radius: 0.3rem;
  text-align: center;
  line-height: 0.5rem;
  border: 1px solid #e7e8ee;
  color: #acaeb8;
}
.tab .active {
  background: #ff7726;
  color: #fff;
  box-shadow: inset 40px 0 50px #ff7726;
}
</style>


