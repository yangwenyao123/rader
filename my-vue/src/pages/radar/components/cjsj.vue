<template>
  <div class="content">
    <ul class="list">
      <li><div class="left">商机名称</div> <div class="right">未填写</div></li>
      <li><div class="left">金额</div> <div class="right"><input type="text" placeholder="请输入金额"></div></li>
      <li><div class="left">关联客户</div> <div class="right"><span class="name">李心怡</span> <img src="../../../assets/images/0.jpg" alt="" class="touxiang"><div class="iconfont icyoujiantou"></div></div></li>
    </ul>
    <div class="beizhu">
     <div class="title">所在阶段</div>
     
    </div>  

    <div class="baocun">保存</div>

  </div>
</template>
<style scoped>
.right {
    display: flex;
    align-items: center;
}
.right .name {
    color: #000
}
.touxiang {
    width: .6rem;
    height: .6rem;
    border-radius: 50%;
    margin: 0 .04rem 0 .15rem;
}
::-webkit-input-placeholder
{
    text-align: right;
    font-size: 10px;
}
::-moz-placeholder
{
  text-align: right;
}
.baocun {
    width: 5rem;
    height: .6rem;
    border-radius: 0.2rem;
    text-align: center;
    line-height: .6rem;
    color: #fff;
    box-shadow: inset 42px 0 110px #2f8bfe;
    border-radius: .3rem;
    position: absolute;
    bottom: .7rem;
    left: 50%;
    margin-left: -2.5rem;
}
.beizhu {
    padding: 0 .2rem;

}

textarea {
   width: 100%;
   height: 2.3rem;
   background: #f5f5f6;
   border-radius: .2rem;
   padding: .16rem;
   color: #757679;
}

.beizhu .title {
    height: 1rem;
    line-height: 1rem;
    color: #757679;
}

.list li {
    height: .8rem;
    padding: 0 .2rem;
    color: #757679;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
}
.list .icyoujiantou {
    color: #c8c8cd;
    font-weight: 600;
    font-size: 20px;
}

</style>

