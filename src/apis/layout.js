//一级导航分类渲染api
import httpInstance from '@/utils/http'

export function getCategoryAPI (){
    return httpInstance({
        url:'/home/category/head'
    })
}