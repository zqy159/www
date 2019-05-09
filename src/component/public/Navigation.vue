<template>
    <div class="Navigation">
    <el-menu
       router
      :default-active="$route.path"
      :default-openeds="[$route.matched[0].path]"
      active-text-color="#2d8cf0" :collapse="isCollapse"
      :unique-opened=false
      >
            <el-menu-item index="/index" @click="SwitchNav({path:'/index',title:'首页'})">
                <i :class="newrouter[0].meta.icon"></i>
                <span slot="title">首页</span>
            </el-menu-item>
     
            <el-submenu v-for="(item,i) in newrouter" :index="item.path" v-if="item.name!='首页'" :key="i">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span>{{item.meta.title}}</span>
                </template>
                <el-menu-item v-for="(r,m) in item.children" :index="item.path+'/'+r.path" :key="m"  @click="SwitchNav({path:item.path+'/'+r.path,title:r.meta.title})">
                    <i :class="r.meta.icon"></i>
                    <span slot="title">{{r.meta.title}}</span>
                </el-menu-item>
            </el-submenu>
      
    </el-menu>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { setTimeout } from "timers";
export default {
  name: "Navigation",
  computed: {
    ...mapGetters(["newrouter"])
  },
  data() {
    return {
      isCollapse:false,
      theme2: "light"
    };
  },
  methods: {
    SwitchNav(name) {
      this.$center.$emit("addRouterNav",name)
    },
  },
  mounted() {
      this.$center.$on("isCollapse",(r)=>{
          this.isCollapse=r
      })
  }
};
</script>

<style>
.Navigation,
.el-menu {
  height: 100% !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

