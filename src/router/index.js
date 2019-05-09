import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';


Vue.use(Router)

// 引入路由
const Login = () => import("@/view/Login"),
  Error = () => import("@/view/Error"),
  Index = () => import("@/view/Index"),
  Model = () => import("@/view/Model"),
  Layout = () => import("@/component/layout");


const router = new Router({
  routes: [
    { path: '/', redirect: '/index', meta: { title: "首页", icon: "el-icon-tickets" } },
    { path: '/login', name: 'Login', redirect: store.getters.username ? '/index' : '', component: Login },
    { path: '/Error', name: 'Error', component: Error, meta: { title: "404" } },

  ]
})

// 控制权限添加的路由
const powerRouter = [
  {
    path: "/index",
    name: "首页",
    component: Layout,
    meta: { title: "首页", icon: "el-icon-tickets" }
  },
  {
    path: "/user",
    name: "用户",
    component: Layout,
    meta: { title: "用户", icon: "el-icon-tickets" },
    children: [
      { path: "user1", name: "用户1", component: Model, meta: { title: "用户1", icon: "el-icon-tickets" } },
      { path: "user2", name: "用户2", component: Model, meta: { title: "用户2", icon: "el-icon-tickets" } },
      { path: "user3", name: "用户3", component: Model, meta: { title: "用户3", icon: "el-icon-tickets" } },
      { path: "user4", name: "用户4", component: Model, meta: { title: "用户4", icon: "el-icon-tickets" } },
      { path: "user5", name: "用户5", component: Model, meta: { title: "用户5", icon: "el-icon-tickets" } },
      { path: "user6", name: "用户6", component: Model, meta: { title: "用户6", icon: "el-icon-tickets" } },
      { path: "user7", name: "用户7", component: Model, meta: { title: "用户7", icon: "el-icon-tickets" } },
      { path: "user8", name: "用户8", component: Model, meta: { title: "用户8", icon: "el-icon-tickets" } },
      { path: "user9", name: "用户9", component: Model, meta: { title: "用户9", icon: "el-icon-tickets" } },
      { path: "user10", name: "用户10", component: Model, meta: { title: "用户10", icon: "el-icon-tickets" } },
      { path: "user12", name: "用户11", component: Model, meta: { title: "用户11", icon: "el-icon-tickets" } },
      { path: "user13", name: "用户12", component: Model, meta: { title: "用户12", icon: "el-icon-tickets" } },
    ]
  },
  {
    path: "/role",
    name: "角色",
    component: Layout,
    meta: { title: "角色", icon: "el-icon-tickets" },
    children: [
      { path: "role1", name: "角色1", component: Model, meta: { title: "角色1", icon: "el-icon-tickets" } },
      { path: "role2", name: "角色2", component: Model, meta: { title: "角色2", icon: "el-icon-tickets" } },
      { path: "role3", name: "角色3", component: Model, meta: { title: "角色3", icon: "el-icon-tickets" } },
    ]
  },
  {
    path: "/setting",
    name: "设置",
    component: Layout,
    meta: { title: "设置", icon: "el-icon-tickets" },
    children: [
      { path: "setting1", name: "设置1", component: Model, meta: { title: "设置1", icon: "el-icon-tickets" } },
      { path: "setting2", name: "设置2", component: Model, meta: { title: "设置2", icon: "el-icon-tickets" } },
      { path: "setting3", name: "设置3", component: Model, meta: { title: "设置3", icon: "el-icon-tickets" } },
    ]
  },
  {
    path: "/category",
    name: "分类",
    component: Layout,
    meta: { title: "分类", icon: "el-icon-tickets" },
    children: [
      { path: "category1", name: "分类1", component: Model, meta: { title: "分类1", icon: "el-icon-tickets" } },
      { path: "category2", name: "分类2", component: Model, meta: { title: "分类2", icon: "el-icon-tickets" } },
      { path: "category3", name: "分类3", component: Model, meta: { title: "分类3", icon: "el-icon-tickets" } },
    ]
  },
  {
    path: "/expand",
    name: "拓展",
    component: Layout,
    meta: { title: "拓展", icon: "el-icon-tickets" },
    children: [
      { path: "expand1", name: "拓展1", component: Model, meta: { title: "拓展1", icon: "el-icon-tickets" } },
      { path: "expand2", name: "拓展2", component: Model, meta: { title: "拓展2", icon: "el-icon-tickets" } },
      { path: "expand3", name: "拓展3", component: Model, meta: { title: "拓展3", icon: "el-icon-tickets" } },
    ]
  },
  {
    path: "/management",
    name: "管理",
    component: Layout,
    meta: { title: "管理", icon: "el-icon-tickets" },
    children: [
      { path: "management1", name: "管理1", component: Model, meta: { title: "管理1", icon: "el-icon-tickets" } },
      { path: "management2", name: "管理2", component: Model, meta: { title: "管理2", icon: "el-icon-tickets" } },
      { path: "management3", name: "管理3", component: Model, meta: { title: "管理3", icon: "el-icon-tickets" } },
    ]
  },
  {
    path: "/vueFun",
    name: "vue常见功能",
    component: Layout,
    meta: { title: "vue常见功能", icon: "el-icon-tickets" },
    children: [
      { path: "selectAdd", name: "下拉框", component: () => import("@/view/vueFun/selectAdd"), meta: { title: "下拉框", icon: "el-icon-tickets" } },
      { path: "upload", name: "上传", component: () => import("@/view/vueFun/upload"), meta: { title: "上传", icon: "el-icon-tickets" } },
      { path: "export", name: "导出", component: () => import("@/view/vueFun/export"), meta: { title: "导出", icon: "el-icon-tickets" } },
      { path: "test", name: "测试", component: () => import("@/view/vueFun/test"), meta: { title: "测试", icon: "el-icon-tickets" } },
      { path: "testDialog", name: "测试弹框", component: () => import("@/view/vueFun/testDialog"), meta: { title: "测试弹框", icon: "el-icon-tickets" } },
      { path: "testTable", name: "测试表格", component: () => import("@/view/vueFun/testTable"), meta: { title: "测试表格", icon: "el-icon-tickets" } },
      { path: "vsCode", name: "VScode配置", component: () => import("@/view/vueFun/vscode"), meta: { title: "VScode配置", icon: "el-icon-tickets" } },
      { path: "fileEXport", name: "文件传导", component: () => import("@/view/vueFun/fileexport"), meta: { title: "文件传导", icon: "el-icon-tickets" } },
    ]
  }
]

export default router

router.beforeEach((to, from, next) => {
  // 判断权限添加动态路由控制权限
  const uname = store.getters.username
  if (uname) {
    //添加动态路由  
    if (store.getters.newrouter.length !== 0) {
      next();
    } else {
      let newRouter
      // 如果保存的为一个对象里面此时uname就为整个对象
      if (uname == "admin" || uname.username == "admin") {
        newRouter = powerRouter
      } else {
        newRouter = powerRouter.filter((item) => {
          // 非管理员进行过滤
          if (item.path == "/user" || item.path == "/role" || item.path == "/management") {
            return false
          } else {
            return item
          }
        })
      }
      // 添加动态路由
      router.addRoutes(newRouter)
      store.dispatch('Roles', newRouter).then(() => {

        next({ ...to })
      })

    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next("/login")
    }
  }


})
