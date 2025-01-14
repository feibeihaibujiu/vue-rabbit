//axios的基础封装
import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import router from "@/router";


const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

//拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    //获取token
    const userSotre = useUserStore()
    const token = userSotre.userInfo.token 
    if ( token ) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const userSotre = useUserStore()
    //统一错误提示
    ElMessage({
        type:'warning',
        message:e.response.data.message
    })
    // 401token失效
    console.log(e.response);
    
    if ( e.response.status == 401) {
        userSotre.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})

export default httpInstance