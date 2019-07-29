<template>
  <div class="content">
    <div class="header">
      <ul class="header-left">
        <li :class="{active:cur==0}" @click="cur=0">今天</li>
        <li :class="{active:cur==1}" @click="cur=1">全部</li>
      </ul>
      <div class="header-right">
        <i class="iconfont tianchongicon"></i>
      </div>
    </div>
    <div class="wancheng">
        <h2 class="left">已完成任务</h2>
        <div class="iconfont icyoujiantou" ></div>
    </div>

    <div class="Nodata">没有更多数据了</div>

    <router-link class="create" tag="div" to="/create" >新建任务</router-link>
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
      
        
    }
}
</script>

<style scoped>
.ss {
    transform:rotate(90deg);
}
.Nodata {
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    color: #acacac;
}
.create {
    position: absolute;
    width: 5rem;
    height: .7rem;
    border-radius: .3rem;
    background-color: #2e85fe;
    color: #fff;
    text-align: center;
    line-height: .7rem;
    bottom: .8rem;
    left: 50%;
    margin-left: -2.5rem;
    font-size: 13px;
    font-weight: 600;
    box-shadow: inset 108px 0 52px #3bc1ff;
}
h2 {
    font-weight: 600;
    color: #1c1d1d;
}
.icyoujiantou {
    color: #535455;
    font-size: 24px;
    
}

.wancheng {
    height: 1rem;
    margin-top: .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    background-color: #fff;
}
.content {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color: #f5f5f6;
    /* background-color: #48aaff; */
}
.header {
    background-color: #fff;
  display: flex;
  align-items: center;
}
.header-left {
  width: 2.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: .6rem;
}
.header-left li {
    height: .7rem;
    line-height: .7rem;
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

