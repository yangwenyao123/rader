<template>
  <div class="wrap-box" ref="wrapper">
    <div class="wrap-box-wrap">
      <div class="newxin" v-if="down">{{ pulldownTip.text }}</div>
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
        <div class="tian" v-for="(item,date) in date">
          <router-link tag="div" to="/daily" class="ribao" v-for="(item,i) in ribao">
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
          <div class="chakan" v-for="(item,index) in chakan">
            <div class="shijian">2019-07-21 11:09</div>
            <router-link tag="div" to="/chakan" class="jilu">
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
      <div class="newxin" v-if="up">{{ pulldownTip.textup }}</div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      img: 1,
      date: 2,
      ribao: 2,
      chakan: 2,
      dropDown: false,
      loadingConnecting: false,
      down: false,
      up: true,
      pulldownTip: {
        text: "下拉刷新", // 松开立即刷新
        textup: "上拉加载更多", // 松开立即刷新
        rotate: "" // icon-rotate
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.BS();
    }, 20);
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data() {
      setTimeout(() => {
        this.BS();
      }, this.refreshDelay);
    }
  },

  methods: {
    BS() {
      if (!this.$refs.wrapper) {
        return;
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX
      });
      this.scroll.on("scroll", pos => {
        console.log(pos.y);
        //如果下拉超过50px 就显示下拉刷新的文字
        if (pos.y > 30) {
          this.pulldownTip.text = "放手刷新";
          this.down = true;
        } else {
          this.down = false;
        }
      });
      //touchEnd 通过这个方法来监听下拉刷新
      this.scroll.on("touchEnd", pos => {
        // 下拉动作
        if (pos.y > 30) {
          console.log("下拉刷新成功");
          console.log("这里执行你方法");
          this.down = false;
        }
        if (this.scroll.maxScrollY > pos.y + 10) {
          console.log("加载更多");
          //使用refresh 方法 来更新scroll  解决无法滚动的问题
          this.scroll.refresh();
        }
        console.log(this.scroll.maxScrollY + "总距离----下拉的距离" + pos.y);
      });
      console.log(this.scroll.maxScrollY);
    },

    task() {
      this.$router.push("/task");
    }
  },
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 3
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: true
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: true
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    }
  }
};
</script>
<style scoped>
.newxin {
  text-align: center;
  height: 1rem;
  line-height: 1rem;

}
.drop-down {
  position: absolute;
  top: -0.8rem;
  left: 0px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 12px;
  color: #ccc;
}
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
  bottom: 0;
  overflow: hidden;
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


