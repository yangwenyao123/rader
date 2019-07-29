<template>
    <div class="analysis">
        <div class="Accounted">
            <div class="title">客户<span>兴趣占比</span><div class="underline"></div></div>
            <div class="zhanbi">
                <div id="chart8" style="height:300px;width:280px;margin:0 auto;"></div>
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
      
    },
    mounted () {
        this.$chart.line8   ("chart8");
    }
}
</script>

<style scoped>
.zhanbi {
    padding-top: .2rem;
    width:280px;
}
 .analysis .title {
     height: .4rem;
     line-height: .4rem;
     position: relative;
     font-size: 11px;
}
.underline {
    position: absolute;
    width: .2rem;
    height: .04rem;
    background-color: #000;
}
.Accounted {
    box-shadow: 0 0 5px #ccc;
    border-radius: .2rem;
    padding: .2rem;
}
    .analysis {
        margin-top: .2rem;
        
    }
   
</style>

