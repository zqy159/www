<template>
    <el-button type="primary" @click="exportExcel()">
        <slot name='title'></slot>
    </el-button>
</template>

<script>
import {downExcel} from "./file"
export default {
    props:{
        data:Object,
    },
    name:"in-export",
    methods:{
        exportExcel(){
            // console.log(this.data)
            downExcel(this.data)
        }
    },
    mounted(){
        console.log(this.data)
    }

}
</script>

