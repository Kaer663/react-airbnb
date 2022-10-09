import BaseRequest, { BASE_URL, BASE_TIME } from "./request";

const baseRequest = new BaseRequest({
  baseURL: BASE_URL,
  method: "GET",
  timeout: BASE_TIME,
  interceptors: {
    requestInterceptor: (config) => {
      return config;
    },
    requestInterceptorCatch(error) {
      console.log("请求发送错误！");
      return error;
    },
    // 返回200开头
    responseInterceptor(result) {
      return result.data;
    },
    responseInterceptorCatch(error) {
      console.log("返回错误拦截，请处理。", error);
      return error;
    }
  }
});

export default baseRequest;
