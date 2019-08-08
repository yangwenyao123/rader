<template>
    <div>
        <div class="header">新建标签</div>
        <div class="label-wrap">
            <div class="genjin pB">
                <div class="title titleColor1">跟进状态</div>
                <div class="label">
                    <div class="labelBtn" @click="editorLabel">合同审核</div>
                    <div class="labelBtn"  @click="editorLabel">合同审核</div>
                </div>
            </div>

              <div class="qita pB">
                <div class="title titleColor2">其他</div>
                <div class="label">
                    <div class="labelBtn">合同审核</div>
                    <div class="labelBtn">合同审核</div>
                    <div class="labelBtn">擦擦擦擦擦</div>
                    <div class="labelBtn">合同审核</div>
                    <div class="labelBtn">擦擦擦擦擦</div>
                   
                </div>
            </div>

             <div class="jibenxinxi pB">
                <div class="title titleColor3">基本信息</div>
                <div class="label">
                    <div class="labelBtn">合同审核</div>
                    <div class="labelBtn">合同审核</div>
                    <div class="labelBtn">擦擦擦擦擦</div>
                    <div class="labelBtn">合同审核</div>
                    <div class="labelBtn">擦擦擦擦擦</div>
                   
                </div>
            </div>

              <div class="type pB">
                <div class="title titleColor3">类型</div>
                <div class="label">
                    <div class="labelBtn">合同审核</div>
                    <div class="labelBtn">合同审核</div>
                    <div class="labelBtn">擦擦擦擦擦</div>
                    <div class="labelBtn">合同审核</div>
                    <div class="labelBtn">擦擦擦擦擦</div>
                </div>
            </div>

                <div class="qita pB">
                <div class="title titleColor2">成交状态</div>
                <div class="label">
                    <div class="labelBtn">已成交(1)</div>
                    <div class="labelBtn">已支付首付款</div>
                </div>
            </div>

               <div class="qita pB">
                <div class="title titleColor2">关注点</div>
                <div class="label">
                    <div class="labelBtn">在意价格</div>
                    
                </div>
            </div>

               <div class="qita pB">
                <div class="title titleColor2">级别</div>
                <div class="label">
                    <div class="labelBtn">流失客户(1)</div>
               
                </div>
            </div>


        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods:{
        editorLabel () {
            this.$router.push('/editorLabel')
        }
    }
}
</script>

<style scoped>

.label-wrap {
    padding-bottom: 1rem !important;
}
.type  .labelBtn {
     background-color: #d7efff;
}
.titleColor3 {
    color: #8099d6;
}
.pB {
     padding-bottom: .4rem;
}
.titleColor3 {
    color: #8099d6;
}
.jibenxinxi .labelBtn{
    background-color: #d7efff;
}
.titleColor2 {
    color: #b99d97;
}
.genjin .labelBtn {
    background-color: #ffe4cd;
}
.qita .labelBtn {
    background-color: #f2e9e9;
}


 .labelBtn {
    border-radius: .26rem;
    margin-right: .2rem;
    font-size: 12px;
    margin-bottom: .2rem;
    width: 30%;
    height: .55rem;
    text-align: center;
    line-height: .55rem;
}

.titleColor1 {
    color: #f1b266;
}

.title {
    height: .6rem;
    line-height: .6rem;
    
}
.label{
    display: flex;
    flex-wrap: wrap;
}

.label-wrap {
    padding: .2rem;
}
    .header {
        height: .6rem;
        line-height: .6rem;
        padding-left: .5rem;
        color: #6bb2db;
        border-bottom: 1px solid #e6e9e8;
    }
</style>

