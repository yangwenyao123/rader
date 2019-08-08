<template>
    <div class="content">
        <div class="card">
            <img src="../../../assets/images/0.jpg" alt="" class="toux">
            <div class="name">李欣怡</div>
        </div>
        <ul>
            <li><span>备注名</span><input type="text" placeholder="未填写"  dir='rtl'></li>
             <li><span>公司名</span><input type="text" placeholder="未填写"  dir='rtl'></li>
            <li><span>职位  </span><input type="text" placeholder="未填写"  dir='rtl'></li>
            <li>
                <span>性别 </span>
                <div class="right">
                    
                    <div class="nan">男<input type="radio" name="sex" class="gcs-radio" id="男" />&nbsp;<label for="男"></label>
                     </div>

                    <div class="nv">女<input type="radio" name="sex" class="gcs-radio" id="女" />&nbsp;<label for="女"></label>
                    </div>
                    
                </div>
            </li>
            <li><span>备注手机</span><input type="text" placeholder="未填写"  dir='rtl'></li>
            <li><span>邮箱</span><input type="text" placeholder="未填写"  dir='rtl'></li>
            <li><span>详细地址</span><input type="text" placeholder="未填写"  dir='rtl'></li>
            <li><span>生日</span><input type="text" placeholder="未填写"  dir='rtl'></li>
        </ul>
         <div class="baocun">保存</div>
    </div>
</template>
<style scoped>
.baocun {
    width: 5rem;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    color: #fff;
    -webkit-box-shadow: inset 42px 0 110px #2f8bfe;
    box-shadow: inset 42px 0 110px #2f8bfe;
    border-radius: .3rem;
    margin: .8rem auto;
}
.gcs-radio {
  display: none;
}

.gcs-radio+label {
  width: .2rem;
  height: .2rem;
  display: inline-block;
  text-align: center;
  vertical-align: bottom;
  border: 1px solid gray;
  border-radius: 50%;
  line-height: .2rem;
}

.gcs-radio:hover+label {
  border: 1px solid #2783FB;
  cursor: pointer;
}

.gcs-radio:checked+label {
  background: #2783FB;
  border: 1px solid #2783FB;

}

.gcs-radio:checked+label:after {
  content: "\2022";
  font-size: 20px;
  color: white;
}

::-webkit-input-placeholder
{
    text-align: right;
    
}
::-moz-placeholder
{
  text-align: right;
}
ul li:last-child {
    border: none;
}
ul {
    border-radius: .2rem;
    box-shadow: 0 0 5px #ccc;
    margin-top: .2rem;
    font-size: 11px;
    color: rgb(117, 118, 121)
}
li {
    height: .75rem;
    line-height: .75rem;
    padding:0 .15rem;
    border-bottom: 1px solid rgb(204, 204, 204);
    display: flex;
    justify-content: space-between;

}
li .right {
    display: flex;
    align-items: center;
    width: 1.5rem;
    justify-content: space-between;
}
li .right .nan,.nv {
    display: flex;
    align-items: center;
}


.toux {
    width: .9rem;
    height: .8rem;
    border-radius: .15rem;

}
.card {
    border-radius: .12rem;
    background: url('../../../assets/images/card.png') no-repeat;   
    height: 1.2rem;
    background-size: 100% 100%;
    box-shadow: 0 0 17px rgb(178, 232, 251);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
}
.content {
    padding: .2rem;
}

</style>

