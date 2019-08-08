<template>
    <div class="content">
        <div class="nav">
            <div class="left">分类&nbsp;<i class="iconfont icondaosanjiao"></i></div>
            <div class="right">默认排序&nbsp;<i class="iconfont icondaosanjiao"></i></div>
        </div>

        <div class="items">
            <div class="item">
                <div class="top">
                    <div class="left">
                        <img src="../../../assets/images/0.jpg" alt="" class="ProductImg">
                        <div class="xinxi">
                            <h2>澳大利亚原装进口 卡斯蔓混酿红酒</h2>
                            <h2>750ml*6瓶</h2>
                           <span>$288.00&nbsp;-$1008.00</span>
                           <i>发布于:2019-07-27 17:55</i>
                        </div>
                    </div>
                    <div class="fenxiang">分享</div>
                </div>
                <div class="xian"></div>

                <div class="num">
                    <div class="num_item">
                        <div class="sc">收藏:&nbsp;&nbsp;<span>0</span></div>
                        <div class="zf">转发:&nbsp;&nbsp;<span>0</span></div>
                        <div class="xl">累计销量:&nbsp;&nbsp;<span>0</span></div>
                    </div>

                     <div class="num_item">
                        <div class="sc">直销佣金:&nbsp;&nbsp;<span>￥120.96</span></div>
                        <div class="zf">分销佣金:&nbsp;&nbsp;<span>￥30.24</span></div> 
                    </div>
                   
                </div>
                <div class="yuyin">
                    <div class="left">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <div class="yutiao">添加语音推荐语</div>
                    </div>
                    <div class="tuijian">设为推荐</div>
                </div>
            </div>

            <div class="item">
                <div class="top">
                    <div class="left">
                        <img src="../../../assets/images/0.jpg" alt="" class="ProductImg">
                        <div class="xinxi">
                            <h2>澳大利亚原装进口 卡斯蔓混酿红酒</h2>
                            <h2>750ml*6瓶</h2>
                           <span>$288.00&nbsp;-$1008.00</span>
                           <i>发布于:2019-07-27 17:55</i>
                        </div>
                    </div>
                    <div class="fenxiang">分享</div>
                </div>
                <div class="xian"></div>

                <div class="num">
                    <div class="num_item">
                        <div class="sc">收藏:&nbsp;&nbsp;<span>0</span></div>
                        <div class="zf">转发:&nbsp;&nbsp;<span>0</span></div>
                        <div class="xl">累计销量:&nbsp;&nbsp;<span>0</span></div>
                    </div>

                     <div class="num_item">
                        <div class="sc">直销佣金:&nbsp;&nbsp;<span>￥120.96</span></div>
                        <div class="zf">分销佣金:&nbsp;&nbsp;<span>￥30.24</span></div> 
                    </div>
                   
                </div>
                <div class="yuyin">
                    <div class="left">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <div class="yutiao">添加语音推荐语</div>
                    </div>
                    <div class="tuijian">设为推荐</div>
                </div>
            </div>

            <div class="Nodata">没有更多数据</div>
        </div>
    </div>
</template>
<style scoped>
.Nodata {
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #b6b6b7;
}
.tuijian {
    color: #fe812e
}

.yuyin .left {
    display: flex;
    align-items: center;
}
.yutiao {
    width: 2rem;
    height: .4rem;
    border: 1px solid #45bce2;
    line-height: .4rem;
    text-align: center;
   
    color: #45bce2;
}
.yuyin img {
    width: .6rem;
    height: .58rem;
    border-radius: .1rem;
    margin-right: .2rem;

}
.yuyin {
    height:1rem;
 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3rem 0 .18rem;
    font-size: 12px;
}
.num span {
    color: #535353;
}
.num_item {
    display: flex;
    justify-content: space-between;

}
.num { 
    height: 1.3rem;
    border-bottom: 1px solid #e8e8e8;
    padding:.18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 12px;
    color: #aeaeaf;

}
.xian {
    height: .2rem;
    background:url(../../../assets/images/xian.png) repeat-x;
    background-size: 25%;
    
}

 .xinxi i{
     font-size: 11px;
     color: #b1b4b4;
 }
.xinxi span {
    font-size: 11px;
    font-weight: 503;
    color: #e5804d;
}
h2 {
    font-weight: 600;
    font-size: 12px;
}
.items {
    background-color: #f0f0f0;
}
.fenxiang {
   width: 1rem;
   height: .4rem;
   text-align: center;
   line-height: .4rem;
   background-color: #fb802d;
   color: #fff;
   border-radius: .2rem;
   font-size: 12px;
}
.xinxi {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:3.2rem;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    height: 1.3rem;
 
}
.ProductImg {
    width: .8rem;
    height: .8rem;
    border-radius: .1rem;
    margin-right: .2rem;
}
.item .top .left {
    display: flex;
   
}
.item .top {
    display: flex;
    justify-content: space-between;
    padding:.3rem .18rem  .3rem .18rem;

}
    .item {
        margin-bottom: .2rem;
        border-radius: .2rem;
        background-color: #fff;

    }
    .content {
        padding: 0 .2rem;
         background-color: #f0f0f0;
         padding-bottom: 2rem;
    }
    .iconfont {
         font-size: 10px;
         color: #c8c8cd;
    }
    .nav {
        height: .7rem;
        display: flex;
        justify-content: space-between;
        color: #474849;
        font-size: 11px;
        line-height: .7rem;
       
    }
</style>
