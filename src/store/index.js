import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import { UserInfo } from "@/api"

Vue.use(Vuex)
const store = new Vuex.Store({
    // 初始数据
    state: {
        username:sessionStorage.getItem("userInfo")?JSON.parse(sessionStorage.getItem("userInfo")).username:"",
        userpwd:sessionStorage.getItem("userInfo")?JSON.parse(sessionStorage.getItem("userInfo")).userpwd:"",
        newrouter: [],
    },
    mutations: {
        // 改变数据
        SET_USERINFO: (state, userinfo) => {                                         
            state.username = userinfo.username;
            state.userpwd = userinfo.userpwd;
        },
        SET_NEWROUER: (state, newrouter) => {
            state.newrouter = newrouter
        }
    },
    actions: {
        // 操纵数据
        Logins({ commit }, info) {
            return new Promise((resolve, reject) => {
                let ifLogin = false
                UserInfo().then((result) => {
                    result.data.user.forEach((item) => {
                        if (item.name == info.username) {
                            ifLogin = true
                        }
                    })
                    console.log(ifLogin)
                    if (ifLogin) {
                        sessionStorage.setItem("userInfo",JSON.stringify(info))
                        commit("SET_USERINFO",info)
                        resolve(info)
                    }else{
                        reject()
                    }
                })
            })

        },
        Roles({ commit }, newrouter) {
            return new Promise((resolve, reject) => {
                commit('SET_NEWROUER', newrouter); //存储最新路由
                resolve(newrouter)
            })

        },
        Logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit("SET_USERINFO", "")
                commit('SET_NEWROUER', []);
                location.reload()
                sessionStorage.removeItem('userInfo');
                resolve()
            })

        }
    },
    // 监听数据
    getters
});

export default store