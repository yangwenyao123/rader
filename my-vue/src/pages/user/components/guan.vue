<template>
  <div class="content">
    <div class="geren">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconwo"></i>
          </div>个人介绍&nbsp;
          <i class="iconfont icyoujiantou"></i>
        </div>
        <div class="lengt">{{remnant}}/400</div>
      </div>
      <div class="text">
        <textarea cols="30" rows="10" maxlength="400" @input="descInput" v-model="desc"></textarea>
      </div>
    </div>

    <div class="yuyin">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconwo"></i>
          </div>语音录制
        </div>
      </div>
      <div class="yuyinbox">
        <img src="../../../assets/images/0.jpg" alt />
        <div class="yutiao"></div>
        <span>重录</span>
        <span>删除</span>
      </div>
    </div>

    <div class="publiStlye">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconwo"></i>
          </div>视频介绍
        </div>
      </div>
      <div class="upload">
        <div class="addVideo"></div>
        <div class="addFm">
          <div class="addBtn">+&nbsp;&nbsp;上传封面</div>
          <div class="shuoming">
            <h2>建议尺寸</h2>
            <p>上传图片大小为750*398,大小不超过2MB</p>
          </div>
        </div>
      </div>
    </div>

    <div class="publiStlye">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconwo"></i>
          </div>个人介绍&nbsp;
          <i class="iconfont icyoujiantou"></i>
        </div>
        <div class="lengt">{{remnant}}/400</div>
      </div>
      <div class="label">
        <div class="labelBtn">12222</div>
        <div class="labelBtn">12222</div>
        <div class="labelBtn">12222</div>
      </div>
      <div class="cankao">可参考的标签</div>
      <ul class="canBle">
        <li>城市守信</li>
        <li>服务态度好</li>
        <li>真诚可靠</li>
        <li>耿直豪爽</li>
        <li>原则性强</li>
        <li>独立自主</li>
        <li>城市守信</li>
        <li>服务态度好</li>
        <li>真诚可靠</li>
        <li>耿直豪爽</li>
        <li>原则性强</li>
        <li>独立自主</li>
      </ul>
    </div>
    <div class="publiStlye">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconwo"></i>
          </div>官网直达
        </div>
        <div class="lengt">{{remnant}}/400</div>
      </div>
      <div class="model">
       
      </div>
      <div class="cankao">未添加模块</div>
      <div class="fot"></div>
    </div>

    <div class="publiStlye">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconwo"></i>
          </div>照片墙
        </div>
        <div class="zidin">自定义名称<i class="iconfont icyoujiantou"></i></div>
      </div>
      <div class="upImg">
             <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
     
         >
          <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
    </div>

    <div class="submit">提交</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      remnant: 0,
      desc:'',
      dialogVisible:false,
      dialogImageUrl:''
    };
  },
  methods: {
    // 文本输入框
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = 400 - txtVal;
    }
  }
};
</script>

<style >
.submit {
    width: 2.8rem;
    height: .7rem;
    background-color: #3891ff;
    text-align: center;
    line-height: .7rem;
    color: #fff;
    border-radius: .4rem;
    margin: .4rem auto;
    /* box-shadow: inset 10px 0 50px 50px #43c5fc; */
}
.el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100px;
    height: 47px;
    line-height: 47px;
    vertical-align: top;
  
}
.el-upload--picture-card i {
    font-size: 20px;
    color: #8c939d;
}
.el-upload-list--picture-card .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100px;
    height: 47px;
    margin: 0 8px 8px 0;
    display: inline-block;
}
.zidin {
    display: flex;
    align-items: center;
}
.upImg {
    padding: .3rem .2rem .4rem .2rem;
    display: flex;
}
.fot {
    height: .7rem;
}
.model {
    height: 1rem;
}
.canBle li {
  padding: 0.08rem 0.2rem;
  color: #6b6b6b;
  border: 1px solid #b8b8b8;
  border-radius: 0.2rem;
  font-size: 11px;
  margin: 0 0.2rem 0.2rem 0;
}
.canBle {
  display: flex;
  flex-wrap: wrap;
  padding: 0.3rem 0 0.4rem 0.1rem;
}
.cankao {
  height: 0.4rem;
  padding-left: 0.1rem;
  border-bottom: 1px solid rgb(226, 226, 226);
  font-size: 11px;
}
.labelBtn {
  padding: 0.08rem 0.2rem;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 10px;
  background-color: rgb(248, 127, 46);
  margin-right: 0.2rem;
}
.label {
  display: flex;
  padding: 0.3rem 0 0.5rem 0.1rem;
}
.publiStlye {
  border-radius: 0.2rem;
  box-shadow: 0 0 5px #ccc;
  margin-bottom: 0.25rem;

  font-size: 12px;
}

.shuoming h2 {
  font-size: 11px;
}
.shuoming {
  height: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.addBtn {
  width: 1.4rem;
  height: 0.5rem;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.5rem;
  background-color: #b4f6fd;
  margin-right: 0.2rem;
  color: #21cadd;
}
.addFm p {
  color: #b9b8b8;
}
.addFm {
  height: 1rem;

  display: flex;
  align-items: center;
  font-size: 10px;
}
.addVideo {
  height: 1.8rem;
  background-color: rgb(202, 202, 202);
}

.upload {
  padding: 0.3rem 0.2rem 0 0.2rem;
}
.yuyinbox span {
  font-size: 10px;
  color: #1092cd;
}
.yutiao {
  width: 2rem;
  height: 0.5rem;
  background-color: #1092cd;
  border-radius: 0.1rem;
}
.yuyinbox img {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}
.yuyinbox {
  height: 1.4rem;
  display: flex;
  padding: 0 0.3rem;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  padding-right: 0.8rem;
}
.yuyin {
  box-shadow: 0 0 5px #ccc;
  border-radius: 0.2rem;
  margin-bottom: 0.2rem;
}
.lengt {
  color: #dadada;
}

.icBg {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.15rem;
  background-color: #1799d4;
  text-align: center;
  line-height: 0.4rem;
  margin-right: 0.2rem;
}
.title .left .iconfont {
  font-size: 12px;
}
.title .left {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.text {
  padding: 0.2rem;
  height: 1.8rem;
}
textarea {
  width: 100%;
  height: 100%;
}
.title {
  height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  border-bottom: 1px solid rgb(231, 229, 229);
}
.geren {
  box-shadow: 0 0 5px #ccc;
  border-radius: 0.2rem;
  margin-bottom: 0.2rem;
}
.content {
  padding: 0.2rem;
}
</style>

