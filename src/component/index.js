// 全局组件
import Layout from "./layout"
import Tableout from "./tableout"
import Upload from "./fileAction/upload"
import Export from "./fileAction/export"
export default {
    install :function(Vue) {
        Vue.component(Layout.name,Layout)
        Vue.component(Tableout.name,Tableout)

        Vue.component(Upload.name,Upload)
        Vue.component(Export.name,Export)
    }
}