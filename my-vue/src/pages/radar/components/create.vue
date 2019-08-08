<template>
  <div class="content">
    <ul class="list">
      <li><div class="left">任务名称</div> <div class="right">未填写</div></li>
      <li><div class="left">日期时间</div> <div class="right">2019-07-27<i class="iconfont icyoujiantou"></i></div></li>
      <li><div class="left">关联客户</div> <div class="iconfont icyoujiantou"></div></li>
    </ul>
    <div class="beizhu">
     <div class="title">备注</div>
      <textarea  style="resize: none;"></textarea>
    </div>  

    <div class="baocun">保存</div>

  </div>
</template>
<style scoped>

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

