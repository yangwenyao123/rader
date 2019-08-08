<template>
    <div class="content">
    <ul class="header-tab">
      <li :class="{active:cur==0}" @click="cur=0">客户</li>
      <li :class="{active:cur==1}" @click="cur=1">订单</li>
    </ul>

    <kehu v-show="cur==0"></kehu>
    <order v-show="cur==1"></order> 
   
    </div>
</template>
<script>
import order from './order'
import kehu from './kehu'
export default {
  data() {
    return {
      cur: 0
    };
  },
  components:{
      order,
      kehu
  }
};
</script>
<style scoped>

 .header-tab {
  width: 100%;
  height: 0.7rem;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 0.2rem;
  font-size: 12px;
}
.header-tab li {
  height: 100%;
  box-sizing: border-box;
  line-height: 0.7rem;
  padding: 0 .2rem;
}
.header-tab .active {
  border-bottom: 2px solid #2cbcff;
  color: #2cbcff;
}
.content {
  padding: 0.2rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(245, 245, 246);
}
</style>

