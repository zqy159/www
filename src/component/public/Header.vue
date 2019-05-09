<template>
    <div class="header">
        <div class="title">标题</div>
        <div class="layout">
            <span style="margin-right:10px">用户:{{$store.getters.username}}</span>
            <el-button type="primary"  @click="logout">退出</el-button>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store
        .dispatch("Logout")
        .then(() => {
          this.$router.push({ path: "/login" });
        })
        .catch(err => {
          this.$message.error("退出失败");
        });
    }
  },
  mounted(){
    console.log(this.$store.grt)
  }
};
</script>

<style scoped>
.header{
  border:1px solid #ddd;
  height: 10%;
  padding:20px 40px;
  /* line-height: 80px; */
  box-sizing: border-box;
}
.title{
  font-size:20px;
  margin-left:50px;
  float: left;
}
.layout{
  float: right;
}
</style>

