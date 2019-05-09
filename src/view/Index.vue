<template>
    <div>
        首页
        <el-dialog
            title=""
            :visible.sync="dialogVisible" fullscreen="true"
           >
            <iframe src="http://localhost:9528/static/pdf/web/viewer.html?file=/server/Temp/Downloads/121-213-eb000d9b59a8459ea1170317b72cf54e.pdf" frameborder="0" width="100%" height="600px" ></iframe>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible:true
        }
        
    },
    mounted(){
        console.log(1)
    }
}
</script>

