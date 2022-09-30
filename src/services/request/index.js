import axios from "axios";

export * from "./config";

class BaseRequest {
  constructor(config) {
    // constructor(config AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors?.request.use(
      // 请求成功拦截
      config.interceptors?.requestInterceptor,
      // 请求错误拦截
      config.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      config.interceptors.responseInterceptor,
      config.interceptors.responseInterceptorCatch
    );
  }
  // instance;
  request(config) {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }
  post(config) {
    return this.request({ ...config, method: "POST" });
  }
  delete(config) {
    return this.request({ ...config, method: "DELETE" });
  }
  patch(config) {
    return this.request({ ...config, method: "PATCH" });
  }
  put(config) {
    return this.request({ ...config, method: "PUT" });
  }
}
export default BaseRequest;
