import request from "@/util/request"

// 获取整体数据。
export function GetAll(params) {
    return request({
        url:"api/shortAll",
        method: 'get',
        params
    })
}
export function UserInfo(params) {
    return request({
        url:"api/userInfo",
        method: 'get',
        params
    })
}
