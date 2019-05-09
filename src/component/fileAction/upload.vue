<template>
    <a href="javascript:;" class="file">
                    <el-button type="primary">
                        <slot name='title'></slot>
                    </el-button>
                  <input type="file" name="" id="" @change="uploadExcels($refs.in)"  ref="in" />
              </a>
</template>

<script>
import {uploadExcel} from "./file"
export default {
    name:"in-upload",
    props:{
         onSuccess: Function
    },
    methods:{
        uploadExcels(el){
             const thKey = ["date","name","address"]
             uploadExcel({el,thKey},(canvas)=>{
               this.onSuccess(canvas)
            })
        }
    },
}
</script>

<style>
.file {
    position: relative;
    display: inline-block;
    background: #fff;
    border-radius: 4px;
    margin: 0px 10px;
    overflow: hidden;
    color:#409EFF;
    text-decoration: none;
    text-indent: 0;
    /* width:55px; */
    top:16px;
    height: 100%;
    line-height: 26px;
    cursor: pointer;
    font-size:14px;
    cursor: pointer;
}
.file input {
    cursor: pointer;
    position: absolute;
    font-size: 100px;
    top:10px;
    right: 0;
    /* top: 0; */
    opacity: 0;
}
</style>
