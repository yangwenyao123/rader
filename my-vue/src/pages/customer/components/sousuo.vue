<template>
  <div class="content">
    <div class="header">
      <div class="sousuo">
        <i class="iconfont iconsousuo"></i>&nbsp;搜索用户
      </div>
    </div>
    <div class="labelList">
      <div class="tishi">搜索指定标签</div>
      <div class="genjin pB">
        <div class="label">
          <div class="labelBtn" @click="editorLabel">合同审核</div>
          <div class="labelBtn" @click="editorLabel">合同审核</div>
          <div class="labelBtn" @click="editorLabel">合同审核</div>
          <div class="labelBtn" @click="editorLabel">合同审核</div>
        </div>
      </div>

      <div class="chakan" @click="quanbulabel">查看全部标签</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    quanbulabel() {
      console.log(132);

      this.$router.push("/customer");
    },
    editorLabel () {
      this.$router.push("/editorLabel");
    }
  }
};
</script>

<style scoped>
.chakan {
  margin: 0.6rem auto;
  width: 2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: #3eb9ff;
  border: 1px solid #3eb9ff;
  border-radius: 0.4rem;
  font-size: 12px;
}
.labelList {
  padding: 0 0.4rem;
}
.label {
  display: flex;
  flex-wrap: wrap;
}
.genjin .labelBtn {
  background-color: #ffe4cd;
}
.labelBtn {
  border-radius: 0.26rem;
  margin-right: 0.18rem;
  font-size: 12px;
  margin-bottom: 0.2rem;
  width: 30%;
  height: 0.55rem;
  text-align: center;
  line-height: 0.55rem;
}

.tishi {
  height: 2.2rem;
  text-align: center;
  line-height: 2.2rem;
  color: #bebebe;
  font-size: 11px;
}
.header {
  height: 0.68rem;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  background-color: rgb(241, 239, 239);
}

.header .sousuo {
  height: 0.45rem;
  line-height: 0.45rem;
  text-align: center;
  width: 100%;
  border-radius: 0.08rem;
  background-color: #fff;
  font-size: 11px;
  color: #bebebe;
}
.iconsousuo {
  font-size: 13px;
}
</style>
