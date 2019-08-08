<template>
    <div class="content">
        <div class="header">
            <div class="left iconfont icyoujiantou"></div>
            <div class="midden">2019-08-28</div>
            <div class="right iconfont icyoujiantou"></div>
        </div>
        <div class="Nodata">
      <img src="../../../assets/images/17.png" alt />
    </div>
    </div>
</template>
<style scoped>
.Nodata {
  width: 4rem;
  height: 3rem;
  margin: 100px auto;
}
.Nodata img {
  width: 100%;
  height: 100%;
}
.content {
    
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  background-color: rgb(245, 245, 246);
}
      .header {
        height: .8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        background-color: #fff;

    }
    .header .left  {
    transform:rotate(180deg);
}
.header .iconfont{
    font-size: 26px;
    color: #c8c8cd;
}
</style>

