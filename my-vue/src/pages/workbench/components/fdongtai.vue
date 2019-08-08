<template>
    <div class="content">
        <!-- 输入框 -->
        <div class="textBox">
      <textarea name id='textArea' cols="30" rows="10" maxlength="400" @input="descInput" v-model="desc" @click=" focusTextarea"></textarea>
      <span class="text">{{txtVal}}/400字</span>
      <div id="introTxt">说点什么吧</div>
    </div>
    <!-- 上传 -->
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

    <div class="btn">
        <div class="fabu">发布</div>
        <div class="quxiao">取消</div>
    </div>

    </div>
</template>
<script>
export default {
    data () {
        return {
          remnant: '',
          desc:'',
          txtVal:0,
          dialogImageUrl: '',
      dialogVisible: false
        }
    },
    methods:{
         // 文本输入框
        descInput() {
        this.txtVal = this.desc.length;
        //   this.remnant = 400 - txtVal;
        },
    focusTextarea() {
        document.getElementById('introTxt').style.display = 'none';
        var temp = document.getElementById('textArea');
        temp.focus();
    },
       // 上传图片
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  
    },
    mounted () {
       
    }
}
</script>

<style >
.btn {
    left: 0;
    right: 0;
    position: absolute;
    bottom: .3rem
}
.fabu,.quxiao{
    width: 98%;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    border-radius: .2rem;
    background-color: rgb(241, 239, 239);
    margin: 0 auto;
    font-size: 12px;
}
.quxiao {
    margin-top: .2rem;
}
.upload {
    padding: .3rem;
    border-bottom: 1px solid rgb(233, 233, 233);
    border-top: 1px solid rgb(233, 233, 233);
    display: flex;
}
.upload .el-upload-list--picture-card .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 96px;
    height: 95px;
    margin: 0 8px 8px 0;
    display: inline-block;
}
.upload .el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 96px;
    height: 95px;
    line-height: 100px;
    vertical-align: top;
}

#introTxt {
   position: absolute;
   top: .2rem;
   left:.2rem;
  color:rgb(134, 134, 134)
}
.text {
    position: absolute;
    bottom: .2rem;
    right:.2rem;
    font-size: 12px;
}
.textBox {
  width: 100%;
  height: 2.5rem;
  overflow: hidden;
  position: relative;
  padding: .15rem;
  box-sizing: border-box;
}
</style>

