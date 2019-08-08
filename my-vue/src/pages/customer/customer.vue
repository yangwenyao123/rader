<template>
  <div class="wrap-box">
    <div class="header" @click="sousuo">
      <div class="input">
        <i class="iconfont iconsousuo"></i>
      </div>
      <div class="btn">搜索</div>
    </div>

    <div class="nav-tab-wrap">
      <ul class="nav-tab">
        <li :class="{active:cur==0}" @click="cur=0" >所有客户</li>
        <li :class="{active:cur==1}" @click="cur=1">客户标签</li>
        <li :class="{active:cur==2}" @click="cur=2">客户报表</li>
      </ul>
    
    </div>


    <quanbu v-show="cur==0"></quanbu  >
    <customerLabel v-show="cur==1"></customerLabel>
    <report v-show="cur==2"></report>

    <Foter :active="active"></Foter>
  </div>
</template>
<script>
import Foter from "@/components/foter";
import quanbu from "./components/quanbu";
import report from "./components/report";
import customerLabel from "./components/customerLabel"
export default {
  data () {
    return {
      cur:0,
      active:null
    }
  },
  methods:{
    sousuo () {
      this.$router.push('/sousuo')
    }
  },
  components: {
    Foter,
    quanbu,
    report,
    customerLabel
  },
    mounted () {
     this.active = this.$route.path
    
  }
};
</script>
<style scoped>
.wrap-box {
  
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}


.nav-tab {
  width: 100%;
  height: 0.8rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.02rem solid #ccc;
  color: #666666;
  background-color: #fff;
}
.nav-tab li {
  width: 30%;
  height: 95%;
  line-height: 0.8rem;

  text-align: center;
}
.active {
  border-bottom: 0.05rem solid #2cbcff;
  color: #2cbcff;
}

.header {
  width: 100%;
  height: 1rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.3rem;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 0.1rem solid #ccc;
}
.header .input {
  width: 4.5rem;
  height: 0.7rem;
  background-color: #dddddd;
  border-radius: 0.1rem;
  display: flex;
  align-items: center;
  padding-left: 0.1rem;
}
.header .btn {
  width: 1rem;
  height: 0.7rem;
  text-align: center;
  line-height: 0.7rem;
  background-color: #ff7726;
  box-shadow: inset -40px 0 20px #ff7726;
  border-radius: 0.1rem;
  color: #fff;
}
</style>


