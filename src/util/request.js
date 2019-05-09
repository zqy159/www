import Axios from "axios"
function request(r){
    return new Promise((resolve,reject)=>{
        Axios.get(r.url,{parmes:r.parmes})
        .then((res)=>{
            //返回获取的数据
            resolve(res)
        })
    })
}
export default request