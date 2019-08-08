<template>
  <div class="content">
    <div class="time">
        <div class="time_left">
          最近活动时间
          <i class="iconfont icondaosanjiao"></i>
        </div>
        <div class="time_right">共0名客户</div>
      </div>
    <div class="list">
        

      <div class="item">
        <div class="personal" @click="jumpData">
          <div class="title"><span>最近活动时间:2019-07-28</span> <span class="genjin">尚未跟进</span></div>
          <div class="rab">
            <div class="top">
            <div class="touxiang">
              <img src="../../../assets/images/0.jpg" alt="">
            </div>
            <div class="xinxi">
              <h2>李欣怡</h2>
              <p>未关联商机阶段</p>
            </div>
            </div>
         
          <div class="midden">
            <div class="label">已签合同</div>
            <div class="label">已签合同</div>  
          </div>
           </div>
        </div>
        <div class="card_fot">
          <div class="fot margin-left" @click="huihua"><i class="iconfont iconxiaoxi"></i>&nbsp;发消息</div>
          <div class="border"></div>
          <div class="fot margin-right" @click="genjin"><i class="iconfont iconxiaoxi"></i>&nbsp;添加跟进</div>
        </div>
        
      </div>

       <div class="item">
        <div class="personal" @click="jumpData">
          <div class="title"><span>最近活动时间:2019-07-28</span> <span class="genjin">尚未跟进</span></div>
          <div class="rab">
            <div class="top">
            <div class="touxiang">
              <img src="../../../assets/images/0.jpg" alt="">
            </div>
            <div class="xinxi">
              <h2>李欣怡</h2>
              <p>未关联商机阶段</p>
            </div>
            </div>
         
          <div class="midden">
            <div class="label">已签合同</div>
            <div class="label">已签合同</div>  
          </div>
           </div>
        </div>
        <div class="card_fot">
          <div class="fot margin-left" @click="huihua"><i class="iconfont iconxiaoxi"></i>&nbsp;发消息</div>
          <div class="border"></div>
          <div class="fot margin-right"  @click="genjin"><i class="iconfont iconxiaoxi"></i>&nbsp;添加跟进</div>
        </div>
        
      </div>
    </div>

    <div class="Nodata_wrap" v-if="Nodata">
      <img src="@/assets/images/13.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Nodata:false
    }
  },
  methods:{
    jumpData () {
      this.$router.push('/chakan')
    },
    huihua () {
      this.$router.push('/session')
    },
    genjin () {
      this.$router.push('/follow')
    }
  }
};
</script>
<style lang="less" scoped>
.time {
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  background-color: #fff;
}
.margin-left{
  margin-left: .2rem;
}
.margin-right{
  margin-right: .2rem;
}
.card_fot {
  height: .8rem;
  border-radius: .2rem;
  border-top: 1px dashed #e5e5e5;
    background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: space-around;
  color: #7d7d7d;
  .border {
    height: 0.4rem;
    width: 1px;
  }
  .fot {
    height: .26rem;
   
    display:flex;
    align-items: center;
  
    .iconfont {
      font-size: 14px;
    }
  }
}
.genjin {
  color: #868686;
}
p {
  font-size: 10px;
  color: #212121;
}
.item {
  border-radius: .2rem;
 
  margin-bottom: .2rem;
 

  .personal {
    border-radius: .2rem;
    background-color: #fff;
       .title {
      height: .7rem;
      display: flex;
      align-items: center;
      justify-content:space-between;
      padding: 0 .2rem;
      border-bottom: 1px dashed #e5e5e5;
      font-size: 11px;
      color: #393939;
      }

    .top {
      display: flex;
      padding: .2rem .2rem 0 .2rem;
     
      .touxiang {
        width: .6rem;
        height:.6rem;
       

        margin-right: .2rem;
          img {
            width: 100%;
            height: 100%;
             border-radius: .1rem;
          }
      }
      .xinxi {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .midden {
      height: 1rem;
      display: flex;
      align-items: center;
      padding: 0 .2rem;
      .label {
        padding: .06rem .15rem;
        color: #fff;
        background-color: #ff802e;
        margin-right: .2rem;
        font-size: 12px;
        border-radius: .16rem;
      }

    }
  }
}
.list {
  padding: .2rem .2rem 2rem .2rem;
  background-color:#e4e4e4;
}
.icondaosanjiao {
  font-size: 10px;
  color: #acaeb8;
}
.Nodata_wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -2rem;
  width: 4rem;
  height: 4rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>


