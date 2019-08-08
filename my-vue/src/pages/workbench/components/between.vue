<template>
  <div class="content">
    <ul class="header-tab">
      <li :class="{active:cur==0}" @click="cur=0">当前月</li>
      <li :class="{active:cur==1}" @click="cur=1">近三个月</li>
      <li :class="{active:cur==2}" @click="cur=2">最近半年</li>
      <li :class="{active:cur==3}" @click="cur=3">全部</li>
    </ul>

    <div class="Nodata">
      <img src="../../../assets/images/17.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0
    };
  }
};
</script>

<style scoped>
.Nodata {
  width: 4rem;
  height: 3rem;
  margin: 100px auto;
}
.Nodata img {
  width: 100%;
  height: 100%;
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
  padding: 0 .15rem;
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

