// service统一出口
import HYRequest from '@/utils/request'
import { TIME_OUT } from '@/utils/request/config'

const hyRequest = new HYRequest({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest