import axios from 'axios'
import Qs from 'qs'
// import router from '../router'
// console.log(process.env.baseUrl)
export const root = process.env.baseUrl

// 请求参数方法 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      // o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
// 数据请求
export const ajax = function (method, url, params, success) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: params,
    baseURL: root,
    timeout: 20000,
    withCredentials: false,
    paramsSerializer: function (params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    }})
    .then(function (res) {
      if (res.status !== 200) {
        console.error(res)
      } else {
        if (res.data.code === 200) {
          if (success) {
            success(res)
          }
        } else {
          console.error(res)
        }
      }
    })
    .catch(function (error) {
      console.error(error)
    })
}
export function getData(method, url, params, success) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: params,
    baseURL: root,
    timeout: 20000,
    withCredentials: false,
    paramsSerializer: function (params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    }})
    .then(function (res) {
      if (res.status !== 200) {
        console.error(res)
      } else {
        if (res.data.code === 200) {
          if (success) {
            success(res)
          }
        } else {
          console.error(res)
        }
      }
    })
    .catch(function (error) {
      console.error(error)
    })
}

export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log(code)
    if (code === 400) {
      redirect('/400')
    }
  })
}