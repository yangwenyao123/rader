<template>
  <div class="content">
    <div class="title">群发消息内容</div>
    <div class="textBox">
      <textarea name id cols="30" rows="10" maxlength="400" @input="descInput" v-model="desc"></textarea>
      <span class="text">{{remnant}}/400字</span>
    </div>

    <div class="upload">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>

    <div class="remind">
      <h2>特别提醒</h2>
      <p>为了响应微信服务通知原则，请忽滥用群发服务通知功能</p>
    </div>

    <div class="send">
      <div class="textx">
        <h2>选择要发送的客户</h2>
        <p>其中0人可以接受强提醒</p>
      </div>

      <div class="border_dashed">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>

      <div class="sub">发送消息</div>
    </div>
   
  </div>
</template>
<script>

export default {
  data() {
    return {
      remnant: 400,
      desc:'',
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  components:{
    
  },
  methods: {

    // 文本输入框
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = 400 - txtVal;
    },
    // 上传图片
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
};
</script>
<style >

.border_dashed   .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 8px 8px 0;
    display: inline-block;
    width: .6rem;
    height:.6rem;
  
}

.border_dashed .el-upload-list--picture-card {
   margin: 0;
   display: inline;
   vertical-align: top;
   display: inline-block;
 
}


.border_dashed  .el-upload--picture-card i {
    font-size: 12px;
}

.border_dashed .el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #a1a1a1;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: .6rem;
    height:.6rem;
    line-height: .6rem;
    vertical-align: top;
    display: inline-block;
}

.upload   .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 8px 8px 0;
    display: inline-block;
    width: 58px;
    height: 53px;
  
}

.upload  .el-upload-list--picture-card {
   margin: 0;
   display: inline;
   vertical-align: top;
   display: inline-block;
 
}
.upload  .el-upload--picture-card i {
    font-size: 20px;
}

.upload .el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #a1a1a1;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 58px;
    height: 53px;
    line-height: 53px;
    vertical-align: top;
    margin-left: .2rem;
    display: inline-block;
}
.sub {
  width: 5rem;
  height: .6rem;
  border-radius: .3rem;
  background-color: #348bfc;
  color:#fff;
  text-align: center;
  line-height: .6rem;
  box-shadow: inset  56px 0px 29px 3px #41c5fe;
  margin: 0 auto;
}
.send {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 3rem;
  padding: .2rem;
  padding-top: .4rem;
}
.border_dashed {

  display: flex;
}

h2 {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: .1rem;
}
p {
  color: rgb(175, 175, 175);
  font-size: 10px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.90);
  white-space:nowrap;
}
.remind {
  width: 100%;
  border-radius: .15rem;
  box-shadow: 0 0 5px #ccc;
  padding: .12rem .2rem .12rem .2rem;
  box-sizing: border-box;
}
.addImg {
  width: 1rem;
  height: 1rem;
  border: 1px dashed #ccc;
  margin-left: .2rem;
  border-radius: .1rem;
}
.upload {
  width: 100%;
  height: 1.7rem;
  border-radius: .1rem;
  margin-top: .2rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #ccc;
  padding-left: .2rem;
  box-sizing: border-box;
}
.text {
    position: absolute;
    bottom: .2rem;
    right:.2rem;
    font-size: 12px;
}
textarea {
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  box-sizing: border-box;

}
.content {
  padding: 0 0.2rem;
}
.title {
  height: 0.7rem;
  line-height: 0.7rem;
  font-weight: 600;
  text-align: center;
}
.textBox {
  width: 100%;
  height: 3rem;
  border-radius: 0.1rem;
  box-shadow: 0 0 5px #ccc;
  overflow: hidden;
  position: relative;;
}
</style>


