<template>
  <div class="content">
    <ul class="card_list">
      <li v-show="cur==0" class="card2">
        <img src="../../../assets/images/21.png" alt class="cardImg" />
        <div class="card_xi">
          <div class="left public">
            <div class="name">
              杨文耀&nbsp;&nbsp;
              <span>设计</span>
            </div>
            <div class="phone">18665572292</div>
          </div>
          <img src="../../../assets/images/0.jpg" alt class="gosi" />
        </div>
      </li>
      <li v-show="cur==1" class="card3">
        <div class="card3_top">
          <div class="left public">
            <div class="name">
              杨文耀&nbsp;&nbsp;
              <span class="sheji">设计</span>
            </div>
            <div class="phone">18665572292</div>
          </div>
          <img src="../../../assets/images/0.jpg" alt class="gosi" />
        </div>
        <div class="card3_bottom">
            <div class="left">克斯蔓生活馆</div>
            <div class="border"></div>
             <img src="../../../assets/images/0.jpg" alt class="gosi" />
        </div>
      </li>
    </ul>

    <div class="style">
      <div class="title">
        名片样式
        <i class="iconfont iconshangji"></i>
      </div>
      <ul class="styleList">
        <li :class="{active:cur==0}" @click="cur=0"></li>
        <li :class="{active:cur==1}" @click="cur=1"></li>
        <li :class="{active:cur==2}" @click="cur=2"></li>
      </ul>
    </div>

    <div class="xiList">
        <div class="genghuan">
            <div class="left">更换图像</div>
            <div class="right"><img src="../../../assets/images/0.jpg" alt="" /><i class="iconfont icyoujiantou"></i></div>
        </div>

        <ul class="itemList">
            <li><div class="key">姓名</div><div class="value">杨文耀</div></li>
            <li><div class="value">姓名</div><div class="value">18665572292</div></li>
            <li><div class="value">职称</div><div class="value">设计</div></li>
            <li><div class="value">部分</div><div class="value">卡斯蔓生活馆</div></li>
            <li><div class="value">邮箱</div><div class="value"><input type="text" dir="rtl" placeholder="请输入邮箱"></div></li>
        </ul>

         <ul class="itemList">
            <li><div class="key">微信</div><input type="text" dir="rtl" placeholder="请输入微信号"></li>
            <li><div class="value">座机</div><input type="text" dir="rtl" placeholder="请输入座机"></li>
            <li><div class="value">公司</div><div class="value">卡斯蔓生活馆</div></li>
            <li><div class="value">门店地址</div><input type="text" dir="rtl" placeholder="请输入座机"></li>
            
        </ul>

          <div class="baocun">保存</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0
    };
  },
  methods: {}
};
</script>
<style scoped>
.baocun {
    width: 5.8rem;
    height: .6rem;
    border-radius: 0.2rem;
    text-align: center;
    line-height: .6rem;
    color: #fff;
    box-shadow: inset 42px 0 110px #2f8bfe;
    border-radius: .3rem;
    margin: .4rem auto;
}
.itemList li:last-child {
    border: none;
}
.itemList {
    margin-top: .3rem;
    box-shadow: 0 0 5px #ccc;
    border-radius: .2rem;
    font-size: 12px;
}
.itemList li {
    display: flex;
    height: .7rem;
    align-items: center;
    padding: 0 .18rem;
    justify-content: space-between;
    border-bottom: 1px solid rgb(226, 226, 226);
}
.xiList {
    padding: .3rem .2rem;

}
.genghuan img {
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    margin-right: .15rem;
}
.genghuan .right {
    display: flex;
    align-items:center;
}
.genghuan {
    height: .7rem;
    border-radius: .18rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 5px #ccc;
    padding: 0 .2rem;
}
.border {
    position: absolute;
    bottom: -.2rem;
    left: 0;
    width: .2rem;
    border: 1px dashed #000;
}
.card3_bottom {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;

}
.card3_bottom .gosi {
    width: .5rem;
    height: .5rem;
}
.card3_top .sheji {
    border-top-right-radius: .12rem;
    border-bottom-left-radius: .12rem;
    background-color: #0d8dd8;
    display: inline-block;
    height: .28rem;
    color: #fff;
    font-size: 10px;
    width: .7rem;
    line-height: .28rem;
    text-align: center;
}
.card3_top .gosi {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
}
.public {
  height: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card3_top  {
    display: flex;
    justify-content: space-between;

}
.card3 {
  height: 2.8rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 5px #ccc;
  box-sizing: border-box;
  padding: 0.4rem 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.styleList {
  display: flex;
}
.styleList .active {
  border: 2px solid #39c0f0;
}
.styleList li:nth-child(3) {
  width: 1rem;
  background: url(../../../assets/images/06.png) no-repeat;
  background-size: 100% 100%;
}
.styleList li:nth-child(2) {
  width: 0.7rem;
  background: url(../../../assets/images/42.png) no-repeat;
  background-size: 100% 100%;
}
.styleList li:nth-child(1) {
  width: 1rem;
  background: url(../../../assets/images/14.png) no-repeat;
  background-size: 100% 100%;
}
.styleList li {
  margin-right: 0.2rem;
  width: 1rem;
  height: 0.6rem;
  border-radius: 0.1rem;
  background-size: 100% 100%;
}
.style {
  padding: 0 0.3rem;
}
.style .title {
  height: 0.8rem;
  line-height: 0.6rem;
}
.public .name {
  font-weight: 600;
  font-size: 16px;
}
.public .name span {
  font-weight: 400;
  font-size: 12px;
}
.public .phone {
  font-weight: 600;
  font-size: 12px;
}
.card_xi .left {
  height: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card_xi .gosi {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.2rem;
}
.card_xi {
  height: 1.8rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.3rem;
  justify-content: space-between;
}

.card2 .cardImg {
  width: 100%;
  height: 5.5rem;
}
.card2 {
  border-radius: 0.2rem;
  overflow: hidden;
  box-shadow: 0 0 5px #ccc;
}
.card_list {
  padding: 0.3rem;
}
</style>


