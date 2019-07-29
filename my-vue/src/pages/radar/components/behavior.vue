<template>
  <div class="content">
    <div class="top">
      <div class="rile">
        <div class="tj">7天内被查看的行为统计</div>
        <div class="iconfont tianchongicon"></div>
      </div>
       <ul class="kapian">
          <li v-for="(item,index) in 6" :key="index">
            <div class="card">
              名片浏览
              <span class="iconbg">
                <i class="iconfont iconhuo"></i>
              </span>
            </div>
            <div class="number">0&nbsp;次</div>
          </li>
        </ul>
    </div>

    <div class="list">
        <ul class="item">
            <li>
                <div class="left">
                    <div class="iconGb">
                        <div class="iconfont iconjia"></div>
                    </div>
                    复制微信
                </div>
                <div class="right"> <div class="num">0</div>&nbsp;次</div>
            </li>

            <li>
                <div class="left">
                    <div class="iconGb">
                        <div class="iconfont iconjia"></div>
                    </div>
                    复制微信
                </div>
                <div class="right"> <div class="num">0</div>&nbsp;次</div>
            </li>

             <li>
                <div class="left">
                    <div class="iconGb">
                        <div class="iconfont iconjia"></div>
                    </div>
                    复制微信
                </div>
                <div class="right"> <div class="num">0</div>&nbsp;次</div>
            </li>

             <li>
                <div class="left">
                    <div class="iconGb">
                        <div class="iconfont iconjia"></div>
                    </div>
                    复制微信
                </div>
                <div class="right"> <div class="num">0</div>&nbsp;次</div>
            </li>
           
        </ul>
        <ul class="item">
            <li>
                <div class="left">
                    <div class="iconGb">
                        <div class="iconfont iconjia"></div>
                    </div>
                    复制微信
                </div>
                <div class="right"> <div class="num">0</div>&nbsp;次</div>
            </li>

             <li>
                <div class="left">
                    <div class="iconGb">
                        <div class="iconfont iconjia"></div>
                    </div>
                    复制微信
                </div>
                <div class="right"> <div class="num">0</div>&nbsp;次</div>
            </li>

            <li>
                <div class="left">
                    <div class="iconGb">
                        <div class="iconfont iconjia"></div>
                    </div>
                    复制微信
                </div>
                <div class="right"> <div class="num">0</div>&nbsp;次</div>
            </li>

             <li>
                <div class="left">
                    <div class="iconGb">
                        <div class="iconfont iconjia"></div>
                    </div>
                    复制微信
                </div>
                <div class="right"> <div class="num">0</div>&nbsp;次</div>
            </li>
           
        </ul>
    </div>

  </div>
</template>

<script>
export default {};
</script>
<style scoped>


.item  .num {
    color: #45a8cf;
}
.item .right {
    display: flex;
    color:#424544;
    font-size: 10px;
    
}
.item .left {
    display: flex;
    align-items: center;
    
}
.iconGb {
    width: .5rem;
    height: .5rem;
    border-radius: .1rem; 
    background-color: #ff7a35;
    text-align:center;
    line-height: .5rem;
    margin-right: .2rem;
}
.item {
    padding: 0 .1rem;
    background-color: #fff;
    margin-bottom: .2rem;
    
}
.item li {
    height: .8rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;

}
.item li:last-child {
    border:none;
}
.content {
    background-color: rgb(231, 231, 231);
     padding-bottom: 1.5rem;
    
}
.top .kapian {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.top .kapian li {
  width: 30%;
  height: 1.2rem;
  background-color: rgb(83, 204, 254);
  margin-bottom: 0.2rem;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fff;
  padding:.1rem 0.1rem  .1rem 0.1rem;
  box-sizing: border-box;
  font-size: 12px;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
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


