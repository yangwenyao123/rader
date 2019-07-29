<template>
    <div>
    <div class="scoll-wrap">
    <div class="day" v-for="item in 2 " :key="item">
        <div class="date">1 天前</div>
        <div class="record">
            <div class="left"><img src="../../../assets/images/66.jpg" alt=""></div>
            <span>转发</span>了你的<span>名片</span>,人脉圈在迅速裂变
        </div>
    </div>

        <div class="noData">没有更多数据</div>
    </div>
    </div>
</template>
<style scoped>
.noData {
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    color: #bdbdbd;
}
.day .left {
    width: .6rem;
    height: .6rem;
    border-radius: 50%;
    margin-right: .2rem;
}
.day .left  img {
    width:100%;
    height: 100%;
}
.day .date {
    height: .8rem;
    line-height: .8rem;
    margin-top: .2rem;
    color: #797979;
    font-size: 10px;
   }
   .record span{
    color: #fc9c5a;
}
.day .record {
    height: 1rem;
    box-shadow: 0 0 5px #ccc;
    border-radius: .1rem;
    display: flex;
    align-items: center;
    padding: 0 .2rem;
    font-size: 11px;
}
</style>

