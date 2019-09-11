import axios from 'axios'
// import constants from './../utils/constants/constants' // 全局变量

// 设置axios请求的默认配置（接口的参数继承默认配置）
// axios.defaults.baseURL = constants.BASE_URL
axios.defaults.baseURL = '/'
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.timeout = 5000 // 请求超时时间

export default axios
