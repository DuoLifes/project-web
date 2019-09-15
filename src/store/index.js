
/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    routerChangeTag:false
}
const getters = {
    routerChangeTag:state=>{
        return state.routerChangeTag
    }
}
const mutations = {
    changeRouterTag (state,tag){
        state.routerChangeTag = tag
    }
}
const actions = {}
export default new Vuex.Store({
    state:state,
    modules:{},
    strict:process.env.NODE_ENV !=='production'
})
