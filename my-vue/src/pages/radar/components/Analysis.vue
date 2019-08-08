<template>
    <div class="analysis">
        <div class="Accounted">
            <div class="title">客户 <span class="blue">兴趣占比</span><div class="underline"></div></div>
            <div class="zhanbi">
                <div id="chart8" style="height:300px;width:280px;margin:0 auto;"></div>
            </div>
        </div>
        <div class="huoyue">
             <div class="title">近15日 <span class="blue">客户活跃度</span><div class="underline"></div></div>

        </div>
        <div class="interactive">
             <div class="title">客户与我的 <span class="blue">互动次数  </span><div class="underline"></div></div>
             <ul>
                 <li v-for="(item,index) in cardNum" :key="index">
                     <span>{{item.name}}</span>
                        <span class="progress_wrap"><span class="progress" :style="{width:item.jindu+'%'}"></span></span>
                     <span class="num">{{item.num}}</span>
                 </li>
                
             </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cardNum:[
                {
                    name:'查看名片',
                    jindu:30,
                    num:1
                },
                {
                    name:'名片点赞',
                    jindu:60,
                    num:6
                },
                 {
                    name:'转发名片',
                    jindu:60,
                    num:6
                },
                 {
                    name:'呼叫座机',
                    jindu:60,
                    num:6
                },
                 {
                    name:'呼叫手机',
                    jindu:60,
                    num:6
                },
                 {
                    name:'查看官网',
                    jindu:60,
                    num:6
                },
                 {
                    name:'保存号码',
                    jindu:60,
                    num:6
                },
                 
            ]
        }
    },
    methods:{
      
    },
    mounted () {
        this.$chart.line8("chart8");
    }
}
</script>

<style scoped>
.progress_wrap  .progress {
    width: 30%;
    height: 100%;
    background-color: rgb(93, 164, 254);
    box-shadow: inset 108px 0 52px #3bc1ff;
}
.interactive .progress_wrap {
    width: 3.3rem;
    height: .18rem;
    background: #cccc;
    
    border-radius: .1rem;
    margin: 0 .4rem 0 .2rem;
    overflow: hidden;
}
.interactive ul {
    font-size: 11px;
    margin-left: .6rem;
    margin-top: .4rem;
}
.interactive li {
    display: flex;
    align-items: center;
    margin-bottom: .6rem;
}
.interactive li span {
    display: inline-block;
}
.interactive {
    box-shadow: 0 0 5px #ccc;
    border-radius: .2rem;
    padding-bottom: .3rem;

}
.huoyue {
    box-shadow: 0 0 5px #ccc;
    border-radius: .2rem;
    height: 5rem; 
}
.blue {
    color:rgb(42, 195, 255)
}

 .analysis .title {
    height: .8rem;
    line-height: .8rem;
    position: relative;
    font-size: 11px;
    padding:0 .2rem;
    margin-top: .2rem;
    color: rgb(200, 200, 205)
}
.underline {
    position: absolute;
    width: .2rem;
    height: .04rem;
    bottom: .2rem;
    background-color: #000;
}
.Accounted {
    box-shadow: 0 0 5px #ccc;
    border-radius: .2rem;
   
}
    .analysis {
        margin-top: .2rem;
        
    }
   
</style>

