<template>
  <div class="content">
    <div class="header">
      <ul class="header-left">
        <li :class="{active:cur==0}" @click="cur=0">7天</li>
        <li :class="{active:cur==1}" @click="cur=1">30天</li>
        <li :class="{active:cur==2}" @click="cur=2">半年</li>
      </ul>
      <div class="header-right">
        <i class="iconfont tianchongicon"></i>
      </div>
    </div>

    <ul class="dateqi" v-show="cur==0">
        <li>
            <div class="left">
                <img src="../../../assets/images/0.jpg" alt="" class="touxiang">
                <div class="name">
                    <h2>杨文耀</h2>
                    <p>2019-07-28 15:35:03</p>
                </div>
            </div>
            <div class="right">领取红包<span>￥5.62</span>到佣金余额</div>
        </li>
    </ul>
     <ul class="dateqi" v-show="cur==1">
        <li>
            <div class="left">
                <img src="../../../assets/images/0.jpg" alt="" class="touxiang">
                <div class="name">
                    <h2>杨文耀</h2>
                    <p>2019-07-28 15:35:03</p>
                </div>
            </div>
            <div class="right">领取红包<span>￥5.62</span>到佣金余额</div>
        </li>
    </ul>
     <ul class="dateqi" v-show="cur==2">
        <li>
            <div class="left">
                <img src="../../../assets/images/0.jpg" alt="" class="touxiang">
                <div class="name">
                    <h2>杨文耀</h2>
                    <p>2019-07-28 15:35:03</p>
                </div>
            </div>
            <div class="right">领取红包<span>￥5.62</span>到佣金余额</div>
        </li>
    </ul>
    <div class="Nodata">加载完毕</div>
   
  </div>
</template>
<script>
export default {
    data () {
        return {
            cur:0,
            
        }
    },
    methods:{
      
        
    },
    components:{

    }
}
</script>
<style scoped>
.Nodata {
    height:1rem;
    line-height: 1rem;
    color: #b0b0b0;
    text-align: center;
    font-size: 12px;
}
 .dateqi li .name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.dateqi li .right span{
    color: rgb(255, 129, 45)
}
.dateqi li .right {
    font-size: 10px;
}
.dateqi li .left {
    display: flex;

}
.dateqi li h2 {
    font-weight: 600;

}
.dateqi li p {
    color: rgb(179, 179, 181);
    font-size: 10px;
}
.dateqi li {
    display: flex;
    justify-content: space-between;
    padding: .2rem;
    background-color: #fff;
}
.touxiang {
    width: .6rem;
    height: .6rem;
    border-radius: .1rem;
    margin-right: .2rem;
}
.content {
    position: absolute;
    left:0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(245, 245, 245);
}
.header {
  background-color: #fff;
  display: flex;
  align-items: center;
}
.header-left {
  width: 3.8rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: 0.6rem;
}
.header-left li {
  height: 0.7rem;
  line-height: 0.7rem;
  width: 1rem;
  text-align: center;
  font-size: 14px;
}
.active {
  border-bottom: 3px solid #48aaff;
  color: #48aaff;
}
.header-right {
  height: 0.4rem;
  width: 0.8rem;
  text-align: center;
  line-height: 0.4rem;
  border-left: 1px solid #ccc;
}
</style>

