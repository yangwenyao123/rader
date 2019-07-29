<template>
    <div>
        <ul class="items">
           <li>备注名</li>
           <li>公司</li>
           <li>职位</li>
           <li>授权手机</li>
           <li>备注手机</li>
           <li class="last">屏销TA的消息推送
               <div class="switch">
                   <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch></div>
            </li>
        </ul>
        
        <div class="items_title">已经成为你的客户1天</div>
          <ul class="items">
           <li>来源<div class="right">来自小程序转发</div></li>
           <li>微信昵称<div class="right">李欣怡</div></li>
           <li>性别</li>
           <li>邮箱</li>
           <li>生日<div class="right">2019-07-28</div></li>
           <li>备注</li>
        </ul>
         <div class="items_title">其他信息</div>
          <ul class="items">
           <li>积分<div class="right">0</div></li>
           <li>成交总额<div class="right">0</div></li>
           <li>收藏商品<div class="right">0</div></li>
           <li>佣金账户<div class="right">0</div></li>
           <li>增值账户<div class="right">0</div></li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
             value: true
        }
    }
}
</script>

<style >
.items_title {
  height: .2rem;
  line-height: .2rem;
  margin-top: .34rem;
  font-size: 10px;
  font-weight: 600;
}
.el-switch.is-checked .el-switch__core::after {
    left: 100%;
    margin-left: -25px;
}
.items .el-switch__core:after {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: 100%;
    -webkit-transition: all .3s;
    transition: all .3s;
    width: 26px;
    height: 26px;
    background-color: #FFF;
}
.items .el-switch__core {
    margin: 0;
    position: relative;
    width: 46px;
    height: 26px;
    border: 1px solid #DCDFE6;
    outline: 0;
    border-radius: 19px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #DCDFE6;
    -webkit-transition: border-color .3s,background-color .3s;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
}

.switch {
    float: right;
}
  .items .right{
      float: right;
  }
    .items {
       box-shadow: 0 0 5px #ccc;
       border-radius: .2rem;
       margin-top: .2rem;
    }
    .items li{
        height: .7rem;
        border-bottom: 1px solid #ccc;
        line-height: .7rem;
        padding: 0 .2rem;
        font-size: 11px;
        color: #757679;

    }
   .items .last {
        height: .9rem !important;
        line-height: .9rem !important;
    }
    .items li:last-child {
        border: none;
        
       
    }

</style>

