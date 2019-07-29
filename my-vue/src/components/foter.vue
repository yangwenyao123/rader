<template>
  <div>

      <ul class="footer">
        <router-link tag="li" to="/"   :class="{active:active=='/'}">
          <i class="iconfont iconleida"></i>雷达
        </router-link>
        <router-link tag="li" to="/message"   :class="{active:active=='/message'}">
          <i class="iconfont iconxiaoxi"></i>消息
        </router-link>
        <router-link tag="li" to="/customer"   :class="{active:active=='/customer'}">
          <i class="iconfont iconkehu"></i>客户
        </router-link>
        <router-link tag="li" to="/workbench"   :class="{active:active=='/workbench'}">
          <i class="iconfont iconfenzu"></i>工作台
        </router-link>
        <router-link tag="li" to="/user"   :class="{active:active=='/user'}">
          <i class="iconfont iconwo"></i>我的
        </router-link>
      </ul>
 
  </div>
</template>
<script>
export default {
  props:['active'],
  data () {
    return {
     
    }
  }
};
</script>
<style scoped>
.active {
  color: #34c4ff;
}
    .footer .iconfont {
       font-size: 20px;
       margin-bottom: .05rem
      }
    
     .footer li {
       height: 100%;
       width: 20%;
       text-align: center;
       display: flex;
      justify-content: space-around;
      flex-direction: column; 
      font-size: 12px;
      
     }
    .footer {
      position:fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      /* padding-top: .1rem; */
      /* box-sizing: border-box; */
      z-index: 99;
      background-color: #fff;
      border-top: 1px solid #ccc;
      padding: .1rem 0;
    }
</style>

