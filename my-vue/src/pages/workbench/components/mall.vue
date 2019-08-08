<template>
    <div class="content">
       <ul>
           <router-link to="/commission" tag="li">
               <div class="left">
                    <div class="icBG BgC1"><i class="iconfont iconshangcheng2"></i></div>
                    佣金管理
                </div>
                <i class="iconfont icyoujiantou"></i>
            </router-link>
            <router-link to="/korder" tag="li">
               <div class="left">
                    <div class="icBG BgC2"><i class="iconfont iconshangcheng2"></i></div>
                    客户订单
                </div>
                <i class="iconfont icyoujiantou"></i>
            </router-link>
             <router-link to="/product" tag="li">
               <div class="left">
                    <div class="icBG BgC3"><i class="iconfont iconshangcheng2"></i></div>
                    我的产品
                </div>
                <i class="iconfont icyoujiantou"></i>
            </router-link>
             <router-link to="/cut" tag="li">
               <div class="left">
                    <div class="icBG BgC4"><i class="iconfont iconshangcheng2"></i></div>
                    砍价管理
                </div>
                <i class="iconfont icyoujiantou"></i>
            </router-link>
             <router-link to="/pintuan" tag="li">
               <div class="left">
                    <div class="icBG BgC5"><i class="iconfont iconshangcheng2"></i></div>
                    拼团管理
                </div>
                <i class="iconfont icyoujiantou"></i>
            </router-link>
             <router-link to="/miaosha" tag="li">
               <div class="left">
                    <div class="icBG BgC6"><i class="iconfont iconshangcheng2"></i></div>
                    秒杀管理
                </div>
                <i class="iconfont icyoujiantou"></i>
            </router-link>
       </ul>
    </div>
</template>
<style scoped>
.icyoujiantou {
    color: #c8c8cd;
    font-size: 20px;
    font-weight: 600;
}

.BgC6 {
    background-color: #ff7083;
}
.BgC5 {
    background-color: #b05eff;
}
.BgC4 {
    background-color: #2d82fe;
}
.BgC3 {
    background-color: #2cbcff;
}

.BgC2 {
    background-color: #2ace3c;
}
.BgC1 {
    background-color: RGB(255,119,38);
}
.left {
    display: flex;
    align-items: center;
}
 .left .iconfont {
     color: #fff;
 }
    .icBG {
        width: .6rem;
        height: .6rem;
        border-radius: .2rem;
        text-align: center;
        line-height: .6rem;
        
        margin-right: .2rem;
    }
    li {
        height: .8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom:1px solid  #e7e8ee;
        padding: 0 .25rem;
        color: #474849;
        font-size: 12px;
    }
</style>

