<template>
    <div class="related">
        <div class="card_box card_box1">
            <div class="left">
                <span>任务</span>
                <div><span class="num">0</span>&nbsp;个</div>
            </div>
            <div class="iconfont iconrenwu"></div>
            <img src="../../../assets/images/related/2.png" alt="" class="shadow">
        </div>
        <div class="card_box card_box2">
            <div class="left">
                <span>商机</span>
                <div><span class="num">0</span>&nbsp;个</div>
            </div>
            <div class="iconfont iconshangji1"></div>
            <img src="../../../assets/images/related/4.png" alt="" class="shadow">
        </div>
        <div class="card_box card_box3">
            <div class="left">
                <span>商城订单</span>
                <div><span class="num">0</span>&nbsp;个</div>
            </div>
            <div class="iconfont iconshangcheng-"></div>
            <img src="../../../assets/images/related/6.png" alt="" class="shadow">
        </div>
        <div class="card_box card_box4">
            <div class="left">
                <span>表单</span>
                <div><span class="num">0</span>&nbsp;个</div>
            </div>
            <div class="iconfont iconicon-order"></div>
            <img src="../../../assets/images/related/8.png" alt="" class="shadow">
        </div>
        <div class="card_box card_box5">
            <div class="left">
                <span>表单</span>
                <div><span class="num">0</span>&nbsp;个</div>
            </div>
            <div class="iconfont iconicon-order"></div>
            <img src="../../../assets/images/related/10.png" alt="" class="shadow">
        </div>
    </div>
</template>
<style scoped>

.shadow {
    width: 2.68rem;
    height: .5rem;
    position: absolute;
    bottom: -24px;
    left: 0;
}
.num {
    font-weight: 600;
    font-size: 18px;
}
.card_box .iconfont {
    font-size:24px;
    
}
.card_box .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size:12px;
}
.card_box1 {
     background: url(../../../assets/images/related/1.png) no-repeat;
}
.card_box2 {
     background: url(../../../assets/images/related/3.png) no-repeat;
}
.card_box3 {
     background: url(../../../assets/images/related/5.png) no-repeat;
}
.card_box4 {
     background: url(../../../assets/images/related/7.png) no-repeat;
}
.card_box5 {
     background: url(../../../assets/images/related/9.png) no-repeat;
}
.card_box {
    width: 2.68rem;
    height: 1.2rem;
   
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    padding: .2rem .4rem;
    box-sizing: border-box;
    color: #e8eefb;
    margin-bottom: .52rem;
    position: relative;
}
    .related {
        padding: .3rem .2rem 0 .2rem;
        box-shadow: 0 0 5px #ccc;
        border-radius: .2rem;
        margin-top: .2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>

