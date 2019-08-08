<template>
  <div class="content">
    <div class="rile">
      <div class="tj">7天内被查看的行为统计</div>
      <div class="iconfont tianchongicon"></div>
    </div>

    <div class="list">
        <ul class="items">
            <li @click="jump">
                <div class="left">
                    <img src="@/assets/images/66.jpg" alt="">
                    <div class="minde">
                        <p>杨文耀&nbsp;跟你在名片上互动了<span class="num">2</span>次</p>
                    </div>
                </div>
                <div class="iconfont icyoujiantou"></div>
            </li>
            <li  @click="jump">
                <div class="left">
                    <img src="@/assets/images/66.jpg" alt="">
                    <div class="minde">
                        <p>杨文耀&nbsp;跟你在名片上互动了<span class="num">2</span>次</p>
                    </div>
                </div>
                <div class="iconfont icyoujiantou"></div>
            </li>
        </ul>
    </div>

    <div class="data">没有更多数据了</div>
  </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods:{
        jump () {
            this.$router.push('/chakan')
        }
    }
}
</script>

<style scoped>
.data {
    text-align:center;
    color:#9d9d9d;
    font-size: 14px;
    padding-top: .3rem;
}   
.items .num {
    color: #f90
}
.items  .left {
    display: flex;
    align-items: center;
    font-size: 10px;

}
.items .left img {
    width: .5rem;
    height: .5rem;
    border-radius: .1rem;
    margin-right: .2rem;
}
 .items li {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: .1rem;
    margin-bottom: .2rem;
    box-shadow: 0 0 5px  #ccc
}

.content {
    padding: 0 .2rem;
}
    
.top {
    padding: 0 .2rem .1rem .2rem;
    margin-bottom: .2rem;
    background-color: #fff;
}
.rile {
  border-top: 1px solid #ccc;
  padding: .15rem 0 .3rem  0;
  display: flex;
  justify-content:space-between;
  
}
.tj {
    color: #9d9d9d;
    font-size: 10px;
}
.tianchongicon  {
    font-size: 14px;
    color:#5bbae0;
}
</style>

