<template>
  <div class="content">
    <div class="card">
      <div class="card-pian">
        <div class="card_top">
          <div class="card_left">
            <div class="card_toux">
              <img src="../../assets/images/66.jpg" alt />
            </div>
            <div class="information">
              <h2>杨文耀</h2>
              <div class="sheji">设计</div>
              <div class="miaosu">卡斯蔓生活馆</div>
            </div>
          </div>
          <div class="editor">
            <router-link to="/editorData" tag="div" class="editor_text">
              资料编辑
              <i class="iconfont icyoujiantou"></i>
            </router-link>
          </div>
        </div>

        <div class="card-bottom">
          <div class="card-bottom_left border-right">
            <i class="iconfont iconmingpian"></i>
            名片海报
          </div>
          <div class="card-bottom_left">
            <i class="iconfont iconhuizhang"></i>
            鸡血海报
          </div>
        </div>
        <!-- 两边的半圆 -->
        <div class="radius radius-left"></div>
        <div class="radius radius-right"></div>
      </div>

    
    </div>

      <div class="list">
        <ul class="item">
          <router-link to="/guan" tag="li">
            <div class="li_left">
              <div class="mingp">
                <i class="iconfont iconmingpian"></i>
              </div>名片首页管理
            </div>
            <div class="li_right">
                <i class="iconfont icyoujiantou"></i>
            </div>
          </router-link>
         <li>
            <div class="li_left">
              <div class="mingp">
                <i class="iconfont icontubiao15">  
                </i>
              </div>主页按钮选择
            </div>
            <div class="li_right"><i class="iconfont icyoujiantou"></i></div>
          </li>
            <li>
            <div class="li_left">
              <div class="mingp">
                <i class="iconfont iconhuashuku"></i>
              </div>话术管理
            </div>
            <div class="li_right"><i class="iconfont icyoujiantou"></i></div>
          </li>
        </ul>

         <ul class="item">
          <li>
            <div class="li_left">
              <div class="mingp">
                <i class="iconfont iconshu"></i>
              </div>使用教程
            </div>
            <div class="li_right"><i class="iconfont icyoujiantou"></i></div>
          </li>
            <li>
            <div class="li_left">
              <div class="mingp">
                <i class="iconfont iconxiaoxi"></i>
              </div>意见反馈
            </div>
            <div class="li_right"><i class="iconfont icyoujiantou"></i></div>
          </li>
            <li>
            <div class="li_left">
              <div class="mingp">
                <i class="iconfont iconshezhi"></i>
              </div>设置
            </div>
            <div class="li_right"><i class="iconfont icyoujiantou"></i></div>
          </li>
          
          
        </ul>
    
      </div>
    <Foter :active="active"></Foter>
  </div>
</template>
<script>
import Foter from "@/components/foter";
export default {
  data () {
    return {
      active:null
    }
  },
  methods: {},
   mounted () {
     this.active = this.$route.path
    
  },
  components: {
    Foter
  }
};
</script>
<style scoped>
.content {
    background-color: #e5e5e7;
    position: absolute;
    left: 0;
    right:0;
    top:0;
    bottom: 0;

}
.li_left {
  display: flex;
  font-size: 12px;
  align-items: center;
}
.mingp {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: #76d9ff;
  text-align: center;
  line-height: 0.4rem;
  color: #fff;
  margin-right: 0.1rem;
}
.mingp .iconfont {
    font-size: 10px;
}

.item {
  border-radius: 0.1rem;
  background: #fff;
  overflow: hidden;
  margin-bottom: .2rem;
}
.item li:last-child {
    border-bottom: none;
}
.item li {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 0 0.2rem;
  box-sizing: border-box;
  font-size: 10px;
}
.list {
  padding: 0 0.2rem 0.5rem 0.2rem;
}
.radius-left {
  top: 61%;
  left: -6px;
}
.radius-right {
  top: 61%;
  right: -6px;
}
.radius {
  width: 0.2rem;
  height: 0.18rem;
  border-radius: 50%;
  background: #b2e8fb;
  position: absolute;
}
.border-right {
  border-right: 1px solid #ccc;
}
.card-bottom {
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #fff;
  background: url(../../assets/images/card2.png) no-repeat;
  background-size: 100%;
  background-position: 0px -10px;
}
.card-bottom_left {
  width: 50%;
  height: 0.7rem;
  display: flex;
  justify-content: space-between;
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
  color: #fff;
}
.editor {
  padding-top: 0.3rem;
  height: 100%;
  font-size: 10px;
  box-sizing: border-box;
}
.information {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.information h2 {
  font-weight: 500;
  color: #fff;
}
.information .sheji {
  color: #fff;
  font-size: 10px;
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
  height: 65%;
  background: url(../../assets/images/card.png) no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.2rem 0 0.4rem;
}
.card_toux {
  width: 1rem;
  height: 1rem;
  margin-right: 0.15rem;
}
.card_toux img {
  width: 100%;
  height: 100%;
  border-radius: 0.1rem;
}

.card {
  padding: 0.2rem 0.2rem 0.5rem 0.2rem;
}
.card-pian {
  background-color: red;
  height: 2.5rem;
  border-radius: 0.1rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 20px #b2e8fb;
}
</style>


