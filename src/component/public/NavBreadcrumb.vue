<template>
    <div>
      <div class="NavBreadcrumb">
        <i :class="!isCollapse?'el-icon-d-arrow-left':'el-icon-d-arrow-right'" @click="changeCollapse"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <!-- <el-breadcrumb-item>{{$route.matched[0].meta.title}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item> -->
        </el-breadcrumb>
      </div>
      <div  class="NavRadio">
          <el-radio v-for="(item,i) in routerNav" v-model="radionum" :label="item.title" border :key="i" @change="changeRouter(item.path)">{{item.title}}</el-radio>
      </div>
     </div>
</template>
<script>
export default {
  name: "NavBreadcrumb",
  data(){
    return {
      isCollapse:false,
      radionum:this.$route.name,
      routerNav:[{path:this.$route.path,title:this.$route.name}]
    }
  },
  watch:{
      radionum(){
        console.log(1)
      }
  },
  methods:{
    changeCollapse(){
      this.isCollapse=!this.isCollapse
      this.$center.$emit("isCollapse",this.isCollapse)
    },
    changeRouter(path){
      this.$router.push(path)
    }

  },
  mounted() {
    this.$center.$on("addRouterNav",(r)=>{
      let isAdd=true
      this.radionum=r.title
        this.routerNav.forEach((item)=>{
            if(item.path==r.path){
              isAdd=false
            }
        })
        if(isAdd){
           this.routerNav.push(r)
        }
    })
  }
};
</script>

<style lang="scss">
.NavBreadcrumb {
  padding-left: 10px;
  height: 26px;
  line-height: 26px;
  font-size: 16px;
  border-bottom: 2px solid #ddd;
  .el-icon-d-arrow-left{
    font-size: 20px;
    cursor: pointer;
  }
  .el-icon-d-arrow-right{
    font-size: 20px;
    cursor: pointer;
  }
  .el-breadcrumb{
    font-weight: bold;
    display: inline-block;
  }
  .mainTitle {
    font-size: 20px;
    font-weight: bold;
    color:#000;
  }
}
</style>


