<template>
    <div class="content">
        <ul>
            <li>标签名字</li>
            <li>合同审核</li>
            <li>标签成员</li>
            <li class="add">添加成员</li>
            <!-- 动态生成的标签 -->
            <li class="chengyuan ">
              
                <img src="../../../assets/images/0.jpg" alt="" class="touxiang">
                <span class="name">李欣怡</span>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.name {
    color: #000;
}
.chengyuan {
    display: flex;
    align-items: center;
}
.touxiang {
    width: .6rem;
    height: .6rem;
    margin-right: .2rem;
}

.add {
    color: #2ac4fd;
}
    .content {
        padding: 0 .2rem;
        font-size: 11px;
        color: #bebebe;
    }
    li {
        height: .8rem;
        line-height: .8rem;
        border-bottom: 1px solid #e6e6e6;
    }
</style>

