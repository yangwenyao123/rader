<template>
  <div class="content-box">
    <div class="tab">
      <ul>
        <li @click="cur=0" :class="{active:cur==0}">全部对话</li>
        <li @click="cur=1" :class="{active:cur==1}">预约客户</li>
        <li @click="cur=2" :class="{active:cur==2}">待唤醒客户</li>
      </ul>
    </div>
    <div class="list">
      <ul class="items">
        <li @click="jump">
          <img src="@/assets/images/0.jpg" alt />
          杨文耀
        </li>
        <li>
          <img src="@/assets/images/0.jpg" alt />
          杨文耀
        </li>
      </ul>
    </div>
    
    <!-- 群发助手 -->
    <router-link to="/qunfa" class="mass" >群发助手</router-link>

    <div class="loading">加载完毕</div>

    <Foter :active="active"></Foter>
  </div>
</template>
<script>
import Foter from "@/components/foter";
export default {
  data() {
    return {
      cur: 0,
      active:null
    };
  },
  components: {
    Foter
  },
  methods: {
    jump() {
      this.$router.push("/session");
    },
    qunfa () {
      this.$router.push("/qunfa");
    }
  },
  mounted () {
    // this.active = this.$route.params.id 
    
    this.active = this.$route.path
    console.log(this.active);
    
  }
};
</script>
<style scoped>
.items img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.1rem;
  margin-right: 0.15rem;
}

.items li {
  font-size: 12px;
  padding: 0.15rem;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  padding-left: 0.2rem;
}
.mass {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #2cbcff;
  padding: 0.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  line-height: 0.35rem;
  color: #fff;
  position: absolute;
  bottom: 1.8rem;
  right: 0.1rem;
}
.content-box {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.loading {
  text-align: center;
  color: #aaaaaa;
  margin-top: 1rem;
}
.tab ul {
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  height: 0.8rem;
  border-bottom: 5px solid #f5f5f6;
}
.tab li {
  width: 26%;
  line-height: 0.8rem;
  text-align: center;
}
.active {
  border-bottom: 4px solid #2cbcff;
  color: #7896be;
}
</style>


