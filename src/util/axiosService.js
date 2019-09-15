/* eslint-disable */
import axios from 'axios'
const Axios = axios.create({
    timeout:3000,
    withCredentials:true, // 准许携带cookie
    headers:{
        'Cache-Control':'no-cache',
        'Pragma':'no-cache'
    }
})
// Axios.interceptors.request.use(config =>{
//     config.baseURL = '網關域名'
//     return config
// })
Axios.interceptors.response.use(
    res => {
        if(res) {
            if(res.data) {
                let data = res.data
                if(data instanceof Array) {
                    return data
                }
                if (data instanceof Object) {
                    if (data.status === 1) {
                        return data.data
                    } else{
                        console.log('错误')
                        return Promise.reject(data.msg)
                    }
                }
            }
        }
    },
    error => {
        switch(error.response.status) {
            case 400:
                console.log('错误编码：400')
                break
            case 401:
                console.log('错误编码：401')
                break
            case 403:
                console.log('错误编码：402')
                window.location.href = window.location.origin + window.location.pathname + '#/403'
                break
            case 500:
                console.log('错误编码：500')
                break
            case 504:
                console.log('错误编码：504')
                break
            default:
                console.log('服务器异常')
        }
    }
)
export default {
    install :function(Vue,options) {
        Object.defineProperty(Vue.prototype,'$http',{value:Axios})
    }
}
