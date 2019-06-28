import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
console.log(process.env.VUE_APP_url);
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_url,
  timeout: 10000000 // 请求超时时间
});

// request拦截器, 登陆用户token可在request拦截器里加
service.interceptors.request.use(
  config => {
    // let token = sessionStorage.getItem('token')
    // if (token) {
    //   config.headers.token = token
    // }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// response拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
