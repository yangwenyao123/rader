<template>
  <div class="content">
    <div class="card">
      <div class="card-pian">
        <div class="card_top">
          <div class="card_left">
            <div class="card_toux">
              <img src="../../../assets/images/66.jpg" alt />
            </div>
            <div class="information">
              <h2>杨文耀</h2>
              <p>未关联商机阶段</p>
            </div>
          </div>
          <div class="biaoqian">添加标签</div>
          <div class="editor">
            <div class="editor_text">
              资料编辑
              <i class="iconfont icyoujiantou"></i>
            </div>
          </div>
        </div>

        <div class="card-bottom">
          <div class="card-bottom_left border-right">
            <h2>未设置</h2>
            <p>预计成交日期</p>
          </div>
          <div class="card-bottom_left">
            <h2>20%</h2>
            <p>预计成交概率</p>
          </div>
        </div>
        <!-- 两边的半圆 -->
        <div class="radius radius-left"></div>
        <div class="radius radius-right"></div>
      </div>
    </div>

    <ul class="nav-tab">
        <li @click="cur=0" :class="{active:cur==0}">互动</li>
        <li @click="cur=1" :class="{active:cur==1}">资料</li>
        <li @click="cur=2" :class="{active:cur==2}">相关</li>
        <li @click="cur=3" :class="{active:cur==3}">AI分析</li>
    </ul>

    <Hdong v-show="cur==0"></Hdong>
    <Zliao v-show="cur==1"></Zliao>
    <Related v-show="cur==2"></Related>
    <Analysis v-show="cur==3"></Analysis>

    <ul class="footer">
        <router-link to="/session" tag="li">
            <div class="icBg"><i class="iconfont iconrenwu"></i></div>
           发消息
        </router-link>
         <router-link to="/cjsj" tag="li">
            <div class="icBg"><i class="iconfont iconrenwu"></i></div>
           创建商机
        </router-link>
          <router-link to="/create" tag="li">
            <div class="icBg"><i class="iconfont iconrenwu"></i></div>
          创建任务
        </router-link>
         <router-link to="/follow" tag="li">
            <div class="icBg"><i class="iconfont iconrenwu"></i></div>
           添加跟进
        </router-link>
    </ul>
  </div>
</template>
<script>
import Hdong from './hudong'
import Zliao from './ziliao'
import Related from './related'
import Analysis from './Analysis'
export default {
    data () {
        return {
            cur:0
        }
    },
    components:{
        Hdong,
        Zliao,
        Related,
        Analysis
    }
}
</script>

<style scoped>
.icBg {
   width: .4rem;
   height: .4rem;
   border-radius: 50%;
   background: #24c3ff;
   text-align: center;
   line-height: .4rem;
   margin-bottom: .07rem;
}
.footer .iconfont {
    font-size: 14px;
    color: #fff;
}
.footer {
    display: flex;
    justify-content: space-between;
    padding: .1rem .2rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid #e2e5e4;
    font-size: 10px;
    background: #fff;
}
.footer li {
    display: flex;
    flex-direction: column;
    color: #7f7e7e;
    width: 20%;
   align-items: center;
   text-align: center
}

.content {
  padding: .2rem .2rem 2rem .2rem;
  background-color: #fdffff;
}
.nav-tab {
  height: .8rem;
  border-radius: .2rem;
  margin-top:.2rem;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 5px #ccc;
}
.nav-tab li {
    padding: .25rem 0;
    width: 1rem;
    text-align: center;   
}
.nav-tab  .active {
    border-bottom: 3px solid #2ac3ff;
    color: #3ebfdc;
}


.biaoqian {
  position: absolute;
  top: 45%;
  left: 0.2rem;
  border: 1px solid #fff;
  padding: 0.07rem 0.18rem;
  border-radius: 0.2rem;
  font-size: 10px;
}
h2 {
  font-weight: 600;
}
p {
  font-size: 10px;
}
.radius-left {
  left: -6px;
}
.radius-right {
  right: -6px;
}
.radius {
  width: 0.2rem;
  height: 0.18rem;
  border-radius: 50%;
  background: #b2e8fb;
  position: absolute;
  top: 66%;
}
.border-right {
  border-right: 1px solid #ccc;
}
.card-bottom {
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  padding: 0.1rem 0;

  background: url(../../../assets/images/card2.png) no-repeat;
  background-size: 100%;
  background-position: 0px -10px;
}
.card-bottom p {
  color: #eaf6ff;
}
.card-bottom_left {
  width: 50%;
  height: 0.7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.card-bottom_right {
  width: 50%;
  height: 0.65rem;
  background: pink;
}

.editor_text {
  display: flex;
  align-items: center;
}
/* .editor {

  box-sizing: border-box;
} */
.information {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 0.65rem;
}

.miaosu {
  color: #d0e0d3;
  font-size: 10px;
}
.card_left {
  display: flex;
}
.card_top {
  width: 100%;
  height: 2rem;
  background: url(../../../assets/images/card.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.22rem 0.2rem 0 0.2rem;
}
.card_toux {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.15rem;
}
.card_toux img {
  width: 100%;
  height: 100%;
  border-radius: 0.1rem;
}

.card {
  
  font-size: 12px;
  color: #fff;
}
.card-pian {
  border-radius: 0.1rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 20px #b2e8fb;
}
</style>

