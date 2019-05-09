<template>
    <div class="imgBox">
        <img :src="showImg?outMsg:overMsg" alt="" @mouseover='showImg=true' @mouseout="showImg=false">
    </div>
</template>
<script>
  export default {
    name:'promptMessage',
    props:['messages','overMsg','outMsg'],
    data(){
        return{
            showImg:true
        }
    },
    created(){
        console.log(this)
    }
  };
</script>
<style>
.imgBox img{
        border:1px solid #f00;
        cursor: pointer;
        height: 20px;
        width:20px;
    
}
</style>

