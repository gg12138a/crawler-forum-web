import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
        deptName: localStorage.getItem('deptName') ? localStorage.getItem('deptName') : null,
    },
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        },
        logout(state) {
            localStorage.removeItem('token')
            state.token = null
        },
        setDeptName(state, deptName) {
            localStorage.setItem('deptName', deptName)
            state.deptName = deptName
        }
    },
})

