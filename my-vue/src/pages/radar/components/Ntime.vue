<template>
  <div class="wrap-box">
    <!-- 任务小助手 -->
    <div class="task">
      <div class="title">任务小助手</div>
      <div class="task_table">
        <div class="title2">
          <h2>今日暂无任务</h2>
          <div class="right" @click="task">查看全部任务</div>
        </div>
        <div class="task_table_te">
          <span>创建任务</span> 有助于管理自己的销售计划
        </div>
      </div>
    </div>

    <!-- 日报 -->
    <div class="list">
      <div class="tian" v-for="item in 2" :key="item">
        <router-link tag="div" to="/daily"  class="ribao" v-for="item in 3" :key="item">
          <div class="shijian">大约 1 小时前</div>
          <div class="ribaobiao">
            <div class="top">
              <div class="icBg">
                <span class="iconfont tianchongicon"></span>
              </div>日报
            </div>
            <div class="bottom">昨日的销售日报表生成了，快去查收吧...</div>
          </div>
        </router-link>

        <!-- 查看记录 -->
        <div class="chakan" v-for="item in 2" :key="item">
          <div class="shijian">2019-07-21 11:09</div>
          <router-link tag="div" to="/chakan" class="jilu" >
            <div class="jilu-left">
              <div class="left">
                <img src="../../../assets/images/66.jpg" alt />
              </div>
              <div class="midde">
                <h2>黄郁雪</h2>
                <p>
                  正在
                  <span>查看</span>你的
                  <span>商城</span> ，尽快把握商机
                </p>
              </div>
            </div>
            <i class="iconfont icyoujiantou"></i>
          </router-link>
        </div>

      </div>

    </div>

    <!-- 没数据时显示的图片 -->
    <div class="content" v-show="img==0">
      <img src="@/assets/images/13.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: 1
    };
  },
  methods:{
    task () {

      this.$router.push('/task')
    }
  },
  components: {}
};
</script>
<style scoped>
h2 {
  font-weight: 600;
  color: #4d4d4d;
}

.jilu .icyoujiantou {
  font-size: 23px;
  color: #000;
}
.jilu-left {
  display: flex;
}
.jilu {
  height: 1rem;
  display: flex;
  align-items: center;
  padding: 0.1rem 0.2rem;
  border-radius: 0.1rem;
  justify-content: space-between;
  box-shadow: 0 0 8px #ccc;
}
.jilu .midde {
  display: flex;
  height: 0.6rem;
  justify-content: space-between;
  flex-direction: column;
}
.jilu span {
  color: #dd8244;
}
.chakan .left img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.1rem;
  margin-right: 0.1rem;
}

.icBg {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #fff;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.1rem;
}
.icBg .tianchongicon {
  font-size: 12px;
  color: #44a6ec;
}
.shijian {
  height: 0.8rem;
  line-height: 0.8rem;
  margin-top: 0.32rem;
  color: #b9b9b9;
}

.ribaobiao {
  height: 1rem;
  background: #48aaff;
  border-radius: 0.14rem;
  box-shadow: inset 10px 0 50px 10px #48aaff;
  color: #fff;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0.08rem 0.3rem;
}

.ribaobiao .top {
  display: flex;
  align-items: center;
}

.task_table_te span {
  color: #8f8f8f;
}

.task_table_te {
  text-align: center;
  margin-top: 0.3rem;
  height: 0.9rem;
}

.task_table .title2 {
  height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  border-bottom: 1px solid #ccc;
}

.task_table .left {
  font-weight: 600;
}

.task_table .right {
  width: 1.6rem;
  height: 0.45rem;
  border-radius: 0.25rem;
  border: 1px solid rgb(233, 85, 17);
  color: rgb(233, 85, 17);
  line-height: 0.45rem;
  text-align: center;
  font-size: 10px;
}
.task_table {
  margin-top: 0.2rem;
  box-shadow: 0 0 4px #999;
  border-radius: 0.2rem;
}
.task .title {
  height: 0.3rem;
  line-height: 0.3rem;
  border-left: 0.05rem solid rgb(83, 204, 254);
  padding-left: 0.1rem;
}
.task {
  color: #b9b9b9;
}
.wrap-box {
  position: absolute;
  left: 0;
  top: 63px;
  right: 0;
  padding: 0.2rem;
  font-size: 12px;
  padding-bottom: 2rem;
}
.content {
  position: absolute;
  left: 50%;
  top: 20%;
  margin-left: -2rem;

  width: 4rem;
  height: 4rem;
}
.content img {
  width: 100%;
  height: 100%;
}
</style>


