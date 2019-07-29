<template>
  <div>
    <div class="content">
      <div class="header-data">
        <div class="title">
          <h2>昨日数据</h2>
        </div>
        <ul>
          <li v-for="(item,index) in 6" :key="index">
            <div class="card">
              名片浏览
              <span class="iconbg">
                <i class="iconfont iconhuo"></i>
              </span>
            </div>
            <div class="number">0&nbsp;次</div>
          </li>
        </ul>
        <div class="task">

          <div class="task-left">
            <span class="iconbg">
              <i class="iconfont iconrenwu"></i>
            </span>
            <div class="title">
              <h2>任务</h2>
              <p>高效管理自己的销售计划</p>
            </div>
          </div>

          <div class="num">0</div>
        </div>
        <div class="task border-none">
          <div class="task-left">
            <span class="iconbg">
              <i class="iconfont iconshangji1"></i>
            </span>
            <div class="title">
              <h2>任务</h2>
              <p>高效管理自己的销售计划</p>
            </div>
          </div>
          <div class="num">0</div>
        </div>
      </div>

      <div class="application">
        <div class="title">
          <h2>我的应用</h2>
        </div>
        <ul class="appIems">
          <li>
            <i class="iconfont iconshangcheng2"></i>商城
          </li>
          <li>
            <i class="iconfont icondongtaicopy"></i>动态
          </li>
          <li>
            <i class="iconfont icondingdan"></i>订单核销
          </li>
          <li>
            <i class="iconfont iconbaobiao"></i>AI报表
          </li>

          <li>
            <i class="iconfont iconribao"></i>每日日报
          </li>
          <li>
            <i class="iconfont iconhongbao"></i>红包领取
          </li>
        </ul>
      </div>
    <Foter :active="active"></Foter> 
   
    </div>
  </div>
</template>
<script>
import Foter from "@/components/foter";
export default {
  data() {
    return {
      active:null
    };
  },
  components:{
    Foter
  },
   mounted () {
     this.active = this.$route.path
    
  }
};
</script>
    <style scoped>     
    .iconhongbao {
        color: #b05afe;
    }
    .iconshangcheng2 {
      color :#42a4ea;
    }
    .icondingdan {
      color :#c06df6;
    }

    .icondongtaicopy {
        color: #13ccba
    }
    .iconbaobiao {
      color:#ff888b;
    }
    .iconribao {
      color :#399df6; 
    }

    
     .appIems .iconfont {
        margin-bottom: 5px;
        font-size: 28px;
     }
    .appIems  {
        display: flex;
        flex-wrap: wrap;
    }
    .appIems li {
        width: 25%;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        font-size: 10px;
       
       
    }


    .application {
      padding: 0 0.15rem 0.2rem 0.15rem;
    }
    .application .title {
      height: .9rem;
      line-height: .9rem;
      font-weight: 600;
    }

.header-data .border-none {
  border: none;
}
.task .num {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #f3821f;
  border-radius: 50%;
  text-align: center;
  line-height: 0.5rem;
  color: #fff;
  box-shadow: inset 0 10px 10px #f3821f;
}
.task .title h2 {
  padding-bottom: 0.1rem;
}
.task .title p {
  padding-top: 0.1rem;
  font-size: 12px;
}
h2 {
  font-weight: 500 !important;
}
.task .title {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.task {
  padding: 0.2rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task-left {
  display: flex;
  align-items: center;
}
.task .iconbg {
  display: inline-block;
  background-color: #4bdac4;
  width: 0.7rem;
  height: 0.68rem;
  border-radius: 0.1rem;
  line-height: 0.65rem;
  margin-right: 0.15rem;
}
.task .iconfont {
  color: #fff;
  font-size: 20px;
}
.header-data {
  width: 100%;
  padding: 0 0.1rem 0 0.1rem;
  box-sizing: border-box;
 border-bottom: 8px solid #e4e4e4;
}
.header-data ul {
  /* padding-bottom: 0.1rem; */
}
.header-data >.title {
  height: .9rem;
  color: #000;
  line-height: .9rem;
  font-weight: 600;
  padding-left: .15rem;

}
.header-data ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding:0 .15rem;
}
.header-data li {
  width: 29%;
  height: 1.2rem;
  background-color: rgb(83, 204, 254);
  margin-bottom: 0.2rem;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  padding:0 0.1rem;
  font-size: 12px;
}
.card {
  display: flex;
  align-items: center;
}
.iconbg {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  line-height: 0.5rem;
  margin-left: 0.18rem;
}
.iconhuo {
  color: rgb(83, 204, 254);
}
</style>



