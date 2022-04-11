import axios from 'axios'

let baseUrl = 'http://localhost:3000'

// 获取轮播图的API  资源类型 对应一下类型 默认为0 即 PC

// 0: pc 1: android 2: iphone 3: ipad

export function getBanners(type = 0) {
  return axios.get(`${baseUrl}/banner?type=${type}`)
}

// 可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)

export function getMusicList(limit = 10) {
  return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

// 获取歌单详情 页面
export function getPlayListDetail(id) {
  return axios.get(`${baseUrl}/top/playlist =${id}`)
}
