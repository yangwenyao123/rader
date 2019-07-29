<template>
  <div class="content">
    <div class="title">客户在线中</div>

    <div class="Session">
        <div class="top">
            <div class="left">话术库</div>
            <input type="text" class="huise">
            <div class="send huise">发送</div>
        </div>
        <div class="bottom">
            <div class="biaoqing"></div>
            <div class="iconfont iconjia"></div>
            <div class="btn huise">选择照片</div>
            <div class="btn huise">优惠券</div>
            <div class="btn huise">商品</div>
        </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.iconjia {
    color: #3aa1f9;
    /* box-shadow: 0 0 10px #3aa1f9; */
    font-size: 20px;
}
.bottom {
    display: flex;
    margin-top:.2rem;
    align-items: center;
    font-size: 11px;
}
.btn {
    padding: .1rem .3rem;
    
    margin-left: .2rem;
    border-radius: .08rem;
}
.huise{
    background-color: #e7e8ee;
}
.send {
    width: 1.2rem;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
  
    font-size: 12px;
    border-radius: .07rem;
    color: #fff;
}
.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.top .left {
    width: 1.1rem;
    height: .48rem;
    text-align: center;
    line-height: .48rem;
    border: 1px solid #4bb2ea;
    font-size: 12px;
    border-radius: .1rem;
    color: #4bb2ea;
}
.top input {
    width: 3.2rem;
    height: .5rem;
    border-radius: .07rem;
   
    padding-left: .1rem;
}

.Session {
    width: 100%;
    box-sizing: border-box;
    padding: .2rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
}
.content {
  position: absolute;
  left: 0;
  /* top: 0.8rem; */
  top:0;
  right: 0;
  bottom: 0;
  background: #f5f5f6;
  padding-bottom: .4rem;
}
.title {
  width: 100%;
  height: 0.7rem;
  text-align: center;
  line-height: 0.7rem;
  color: #33b8dc;
  font-size: 12px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #fff;
}

</style>


