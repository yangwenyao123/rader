<template>
    <div class="contnet">
        <div class="header">
            <div class="left iconfont icyoujiantou"></div>
            <div class="midden">2019-08-28</div>
            <div class="right iconfont icyoujiantou"></div>
        </div>
        <ul class="list">
            <li>
                <div class="left">当月可发金额</div>
                <div class="right">0</div>
            </li>
             <li>
                <div class="left">上月获得金额</div>
                <div class="right">0</div>
            </li>
            <li>
                <div class="left">历史累计总金额</div>
                <div class="right">0</div>
            </li>
            <li>
                <div class="left">全部未入帐金额</div>
                <div class="right">0</div>
            </li>
        </ul>

        <ul class="bottom-list">
             <router-link to="/detail" tag="li">
               <div class="left">
                    <div class="icBG BgC6"><i class="iconfont iconshangcheng2"></i></div>
                    佣金流水明细
                </div>
                <i class="iconfont icyoujiantou"></i>
            </router-link>
             <router-link to="/between" tag="li">
               <div class="left">
                    <div class="icBG BgC5"><i class="iconfont iconshangcheng2"></i></div>
                    佣金客户关系
                </div>
                <i class="iconfont icyoujiantou"></i>
            </router-link>
        </ul>
    </div>
</template>
<style scoped>
.bottom-list .iconfont {
    font-size: 15px;
}
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
.bottom-list {
    border-radius: .2rem;
    box-shadow: 0 0 5px #ccc;
}
.bottom-list .left {
    display: flex;
    align-items: center;
}
 .bottom-list .left .iconfont {
     color: #fff;
 }
 .bottom-list   .icBG {
    width: .5rem;
    height: .5rem;
    border-radius: .18rem;
    text-align: center;
    line-height: .5rem;
    margin-right: .2rem;
    }
 .bottom-list   li {
        height: .8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom:1px solid  #e7e8ee;
        padding: 0 .25rem;
        color: #474849;
        font-size: 12px;
    }
.bottom-list li:last-child {
    border:none;
}
.list li:last-child {
    border:none;
}
.list .right {
    font-weight: 600;
}
.list li {
    display: flex;
    height: .8rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    border-bottom: 1px solid #e7e8ee;
}
.list {
    margin-bottom:.2rem;
    border-radius: .2rem;
    box-shadow: 0 0 5px #ccc;
}
.header .left  {
    transform:rotate(180deg);
}
.header .iconfont{
    font-size: 26px;
    color: #c8c8cd;
}

.contnet {
    padding: 0 .2rem;
}
    .header {
        height: .8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;

    }
</style>
