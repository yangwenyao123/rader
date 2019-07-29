<template>
  <div class="content">
    <h2 class="title">跟进描述</h2>
    <div class="textBox">
        <textarea name id cols="30" rows="10" maxlength="400" @input="descInput" v-model="desc"></textarea>
        <span class="text">{{remnant}}/400字</span>
    </div>

    <div class="label">
        <div class="label-title">
            <div class="left">客户标签</div>
            <div class="right">8/10</div>
        </div>
        <div class="labelBox">
            <div class="add">+</div>
        </div>
    </div>

    <div class="date">
        <div class="left">下次跟进日期</div>
        <div class="right">请选择日期 <i class="iconfont icyoujiantou"></i></div>
    </div>
    <div class="date">
        <div class="left">成员概率设置</div>
        <div class="right">20%</div>
    </div>
    <div class="submit">提交</div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            remnant:0,
            desc:''
        }
    },
   methods :{
           // 文本输入框
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = 400 - txtVal;
    },
   }
}
</script>

<style scoped>  
.content {
    
} 
.submit {
    width: 6rem;
    height: .67rem;
    border-radius: 0.2rem;
    text-align: center;
    line-height: .67rem;
    color: #fff;
    -webkit-box-shadow: inset 42px 0 110px #2f8bfe;
    box-shadow: inset 42px 0 110px #2f8bfe;
    border-radius: .3rem;
    margin: .3rem auto;
    font-weight: 600;
}
    
.date .right {
     display: flex;
     align-items: center;
     color: #a6a6a6;
     font-weight: normal;
}
.date {
    height: .8rem;
    box-shadow: 0 0 5px #ccc;
    border-radius: .2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 600;
    padding: 0 .2rem;
    margin-top: .2rem;
}
.add {
    width: 1.2rem;
    height: .35rem;
    background: #f3f3f3;
    border-radius: .4rem;
    text-align: center;
    line-height: .35rem;
    font-size: 20px;
    color: #707070;
}
.label .right {
    color:#cfced6;
}
.label {
    border-radius: .2rem;
    overflow: hidden;
    box-shadow: 0 0 5px #ccc;
    
}
.labelBox {
    padding: .3rem .2rem .6rem .2rem;
    
}
.label-title {
    height: .8rem;
    line-height: .8rem;
    padding: 0 .1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
    font-size: 12px;    
}
textarea {
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
background-color: #f7f7f7;
}
.text {
    position: absolute;
    bottom: .2rem;
    right:.2rem;
    font-size: 11px;
    color: #787878;
}
.textBox {
  width: 100%;
  height: 2rem;
  border-radius: 0.1rem;
  box-shadow: 0 0 5px #ccc;
  overflow: hidden;
  position: relative;
  margin-bottom: .2rem;
}
    .title {
       height: 1rem;
       line-height: 1rem;
       text-align: center;
       font-weight: 600;
    }
    .content {
        padding: 0 .2rem;
    }
</style>

