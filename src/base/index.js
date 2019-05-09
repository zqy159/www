import baseFunction from "./baseFunction"

export default {
    install :function(Vue) {
        // 分辨率调节
        document.documentElement.style.fontSize = document.documentElement.clientWidth /12.80 + 'px';
        // 组建内常用函数
        Vue.prototype.$baseFunction=baseFunction
        // Vue.prototype.$uploadExcel=uploadExcel
        // 组件传值中间对象
        Vue.prototype.$center=new Vue()
    }
}
