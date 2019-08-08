<template>
    <div class="content">
        <div class="header"><div class="left">全部&nbsp; &nbsp;&nbsp;<i class="iconfont icyoujiantou"></i></div><div class="right">共0位</div></div>
        <div class="Nodata">
            <img src="../../../assets/images/17.png" alt="">
        </div>
          <router-link class="create" tag="div" to="/cjsj" >新建商机</router-link>
    </div>
</template>
<style scoped>
.create {
    position: absolute;
    width: 5rem;
    height: .6rem;
    border-radius: .35rem;
    background-color: #2e85fe;
    color: #fff;
    text-align: center;
    line-height: .6rem;
    bottom: .8rem;
    left: 50%;
    margin-left: -2.5rem;
    font-size: 13px;
    font-weight: 600;
    -webkit-box-shadow: inset 108px 0 52px #3bc1ff;
    box-shadow: inset 108px 0 52px #3bc1ff;
}
.Nodata {
    width: 4rem;
    height: 3rem;
    margin: 100px auto;

}
.Nodata img{
    width: 100%;
    height: 100%;
}
.icyoujiantou {
    transform: rotate(90deg);
    display: inline-block;
    font-size: 20px;
}
.header  .left {
    display: flex;
    align-items: center;
}
.header {
    height: .7rem;
    line-height: .7rem;
    border-radius: .1rem;
    padding: 0 .2rem;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    font-size: 12px;
    }
    .content {
        padding: .2rem;
        background-color:rgb(245,245,246);
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        
    }
</style>

