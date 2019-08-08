<template>
  <div class="content">
    <ul class="header-tab">
      <li :class="{active:cur==0}" @click="cur=0">未支付</li>
      <li :class="{active:cur==1}" @click="cur=1">已完成</li>
      <li :class="{active:cur==2}" @click="cur=2">已取消</li>
    </ul>
    
    <div class="jiazai">已加载完毕</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0
    };
  },
 
};
</script>
<style scoped>
.jiazai {
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    font-size: 12px;
    color: #b6b6b7;
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
  padding: 0 0.15rem;
}
.header-tab .active {
  border-bottom: 2px solid #2cbcff;
  color: #2cbcff;
}
</style>

