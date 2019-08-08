<template>
  <div class="content" ref="content">
    <div class="title">客户在线中</div>
        <p>scac</p>
    <div class="Session">
      <div class="top">
        <div class="left" @click="huashu">话术库</div>
        <input type="text" class="huise" v-model="dec"/>
        <div class="send huise">发送</div>
      </div>
      <div class="bottom">
        <div class="biaoqing"></div>
        <div class="iconfont iconjia"></div>
        <div class="btn huise">选择照片</div>
        <div class="btn huise">优惠券</div>
        <div class="btn huise">商品</div>
      </div>
    </div>
    <div class="bg" ref="bg" @click="bg"></div>
    <div class="huaList" ref="huasu">
      <ul class="left">
        <li>123</li>
      </ul>
      <ul class="right">
        <li @click="text" ref="text">522325</li>
        
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fa: true,
        huashux:'',
        bgx:'',
        dec:''
    };
  },
  methods: {
    huashu () {
      this.bgx = this.$refs.bg;
      this.huasux = this.$refs.huasu;
      this.huasux.style.display = "block";
      this.bgx.style.display = "block";
      this.fa = false;

    },
    bg () {
      this.huasux.style.display = "none";
      this.bgx.style.display = "none";
      this.fa = true;
    },
    text () {
        var text = this.$refs.text
        console.log(text);
        this.dec = text.innerText
        this.huasux.style.display = "none";
        this.bgx.style.display = "none";
    }
  }
};
</script>
<style scoped>
.bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: RGBA(122,122,123,.5);
  display: none;
}

.huaList .right li {
  width: 100%;
  border-radius: 0.18rem;
  height: 0.58rem;
  padding-left: 0.3rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 0.58rem;
  background-color: #fff;
  color: red;
  margin-bottom: .2rem;
}
.huaList .right {
  padding: 0.2rem;
  box-sizing: border-box;
}
.huaList .left li {
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  background-color: green;
  border-left: 2px solid #3891ff;
}
.huaList .left {
  padding: 0.2rem 0;
  box-sizing: border-box;
  width: 30%;
  height: 100%;
  background-color: #fff;
  float: left;
}

.huaList .right {
  width: 70%;
  height: 100%;
  background-color: #f5f5f6;
  float: left;
}
.huaList {
  height: 8rem;
  background-color: red;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: none;
  z-index: 99;
}

.iconjia {
  color: #3aa1f9;
  font-size: 20px;
}
.bottom {
  display: flex;
  margin-top: 0.2rem;
  align-items: center;
  font-size: 11px;
}
.btn {
  padding: 0.1rem 0.3rem;

  margin-left: 0.2rem;
  border-radius: 0.08rem;
}
.huise {
  background-color: #e7e8ee;
}
.send {
  width: 1.2rem;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;

  font-size: 12px;
  border-radius: 0.07rem;
  color: #fff;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top .left {
  width: 1.1rem;
  height: 0.48rem;
  text-align: center;
  line-height: 0.48rem;
  border: 1px solid #4bb2ea;
  font-size: 12px;
  border-radius: 0.1rem;
  color: #4bb2ea;
}
.top input {
  width: 3.2rem;
  height: 0.5rem;
  border-radius: 0.07rem;
  padding-left: 0.1rem;
}

.Session {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
}
.content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #f5f5f6;
  padding-bottom: 0.4rem;
}
.title {
    width: 100%;
    height: 0.7rem;
    text-align: center;
    line-height: 0.7rem;
    color: #33b8dc;
    font-size: 12px;
    background-color: #fff;
}
</style>


