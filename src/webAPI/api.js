import Vue from 'vue'
let vueHttp = new Vue()

export default{
    searchData(data) {
        return vueHttp.$http({
            url:'/test/api',
            method:'POST',
            data:data
        })
    }
}