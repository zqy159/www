<template>
    <div>
          <in-upload :on-success="uploadSuccess">
              <span slot="title">导入</span>
          </in-upload>
          <in-export :data="info">
              <span slot="title">导出</span>
          </in-export>
          <el-button type="primary" @click="doSave()">打印</el-button>
        <el-table
      :data="list"
      style="width: 600px;margin:0 auto">
      <el-table-column
        prop="date"
        label="日期"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="200">
      </el-table-column>
      <el-table-column width="200"
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </div>
</template>

<script>

export default {
    data() {
        return {
          list: [],
        }
    },
    computed:{
        info(){
            return {
                list:this.list,
                filterVal:['date',"name",'address'],
                th:['日期','姓名','地址'],
                fileName:"装车路线维护",
                fileType:"xlsx",
                sheetName:"装车路线维护",
          }
        }
    },
    methods:{
      importExcel(){
        
      },
      exportExcel(){
         
      },
      uploadSuccess(data){
          this.list=data
      },
      exportSuccess(){

      }
    }
    
}
</script>

<style>

</style>
