<template>
    <div class="content">
        <div class="banner">
            <div class="name">
                <h2>杨文耀</h2>
                <img src="../../../assets/images/0.jpg" alt="" class="touxiang">
            </div>
        </div>

        <div class="neirong">
            <div class="card_header">
                <img src="../../../assets/images/0.jpg" alt="" class="xiaotoux">
                <div class="xname">
                    <h3>卡斯蔓生活馆</h3>
                    <p>2019-05-07&nbsp;11:38</p>
                </div>
                <i class="iconfont iconhuizhang"></i>
                <div class="gsi">公司</div>
            </div>
            <div class="wenzhang">
                <div class="lianjie">
                    <img src="../../../assets/images/0.jpg" alt="" class="wenImg">
                    自由省钱 分享赚钱
                </div>

                <div class="dhicon">
                    <i class="iconfont iconmingpian">&nbsp;3</i>
                    <i class="iconfont iconxiaoxi">&nbsp;1</i>
                </div>
                <div class="dihui">
                    <div class="dian">
                        <i class="iconfont iconmingpian"></i>
                        <img src="../../../assets/images/0.jpg" alt="">
                        <img src="../../../assets/images/0.jpg" alt="">
                    </div>
                    <div class="hui">
                        <div class="left">
                            <i class="iconfont iconmingpian"></i>
                            <img src="../../../assets/images/0.jpg" alt="">
                            <div class="huiname">
                                <h5>杨文耀</h5>
                                <p>c1s1555</p>
                            </div>
                        </div>
                        <div class="date">2019-07-21</div>
                    </div>
                </div>
                
            </div>
        </div>

          <div class="neirong">
            <div class="card_header">
                <img src="../../../assets/images/0.jpg" alt="" class="xiaotoux">
                <div class="xname">
                    <h3>卡斯蔓生活馆</h3>
                    <p>2019-05-07&nbsp;11:38</p>
                </div>
                <i class="iconfont iconhuizhang"></i>
                <div class="gsi">公司</div>
            </div>
            <div class="wenzhang">
                <div class="lianjie">
                    <img src="../../../assets/images/0.jpg" alt="" class="wenImg">
                    自由省钱 分享赚钱
                </div>

                <div class="dhicon">
                    <i class="iconfont iconmingpian">&nbsp;3</i>
                    <i class="iconfont iconxiaoxi">&nbsp;1</i>
                </div>
                <div class="dihui">
                    <div class="dian">
                        <i class="iconfont iconmingpian"></i>
                        <img src="../../../assets/images/0.jpg" alt="">
                        <img src="../../../assets/images/0.jpg" alt="">
                    </div>
                    <div class="hui">
                        <div class="left">
                            <i class="iconfont iconmingpian"></i>
                            <img src="../../../assets/images/0.jpg" alt="">
                            <div class="huiname">
                                <h5>杨文耀</h5>
                                <p>c1s1555</p>
                            </div>
                        </div>
                        <div class="date">2019-07-21</div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="Nodata">没有更多数据</div>
        <router-link to="/fdongtai" tag="div" class="dongtai">发布动态</router-link>
    </div>
</template>
<style scoped>
.content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}
.dongtai {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background-color: #3aa8fc;
    position: fixed;
    bottom: 1rem;
    right: .2rem;
    color: #fff;
    text-align:center;
    display: flex;
    align-items: center;

}
.Nodata {
    height:1rem;
    line-height: 1rem;
    color: #b0b0b0;
    text-align: center;
    font-size: 12px;
}
.neirong {
    padding:.3rem .2rem;

    border-bottom: 1px solid #cccc
}
.hui .date {
    height: 100%;
    font-size: 10px;
    color: #858484;
    padding-top: .28rem;
}
.huiname p {
    font-size: 10px;
    color: #111413;
}
.huiname h5 {
    font-size: 10px;
    margin-bottom:.1rem;
    color: #2cb4ed;
}
.hui img {
    width: .42rem;
    height: .42rem;
    margin-right: .1rem;
    border-radius: .08rem;
}
.hui .left {
    display: flex;
    align-items: center;
}
.hui {
    background-color: #f0f0f0;
    height: .8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: .2rem;
}
.dihui .iconfont{
    font-size: 14px;
    margin: 0 .2rem;
}

.dian {
    height: .8rem;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e3e2e2;
    
}
.dian img {
    width: .45rem;
    height: .45rem;
    margin-right: .1rem;
    border-radius: .08rem;
}


.dhicon .iconfont {
    color: #b3b3b3;
    font-size: 12px;

}

.iconxiaoxi {
    margin-right: .6rem
}
.dhicon {
    width:100%;
    height: 1rem;  
    display: flex;
    align-items: center;
    flex-direction:row-reverse;
}
.lianjie {
    width:100%;
    height: 1rem;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;

}
.wenzhang {
    padding-left: .8rem;
}

.wenImg {
    width: .8rem;
    height: .8rem;
    margin-right: .2rem;
    margin-left: .05rem;
}
.gsi {
    border: 1px solid #b6b6b7;
    color: #b6b6b7;
    font-size: 11px;
    width: .7rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
}
.xname p{
    margin-top: .1rem;
    color: 12px;
    color: #b6b6b7;
}
.xiaotoux {
    width: .5rem;
    height: .5rem;
    border-radius: .1rem;
}

.card_header {
    display: flex;
    width: 4.5rem;
    justify-content: space-between;
    height: 1rem;

}
h2 {
    color: #fff;
    font-weight: 600;
    margin-top: .2rem;
}
.touxiang {
    width: 1.1rem;
    height: 1rem;
    border-radius: .1rem;
    margin-left: .2rem;
}
.name {
    display: flex;
    position: absolute;
    right: .4rem;
    bottom: -.3rem;
    font-size: 12px;
}
    .banner {
        position: relative;
        height: 2.5rem;
        margin-bottom: .65rem;
        background:url(../../../assets/images/card.png) no-repeat;
        
    }
</style>

