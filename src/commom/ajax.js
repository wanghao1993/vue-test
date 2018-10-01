/**
 * AJAX Module
 */
import axios from 'axios'
let cancel = null
let _axios = axios.create({
    xsrfCookieName: 'data_csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    responseType: 'json',
    baseURL: window.siteUrl
})

_axios.cancelSources = (function () {
    let SOURCE_MAP = {}
    return {
        // 给路由创建 cancelToken
        get(url) {
            if (SOURCE_MAP[url] === undefined) {
                SOURCE_MAP[url] = axios.CancelToken.source()
            }
            return SOURCE_MAP[url]
        },
        // 激活路由对应 cancelToken，停止请求
        active(url) {
            this.get(url).cancel('Auto kill long request under switching to another route')
            delete SOURCE_MAP[url]
        }
    }
}())

_axios.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    window.location.reload()
                    break
                case 500:
                    // 异常
                    break
            }
        }
        return Promise.reject(error)
    }
)
_axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.resolve(error)
})

export default _axios
