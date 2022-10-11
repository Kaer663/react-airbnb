import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getHomeGoodPriceData, getHomeDiscountData, getHomeHotRecommendData } from "@/services/modules/home"

// 异步请求代码
export const fetchHomeDataAction = createAsyncThunk("fetchData", (_, { dispatch }) => {
  getHomeGoodPriceData().then(res => dispatch(changeGoodProductInfo(res)));
  getHomeDiscountData().then(res => dispatch(changeDiscountInfo(res)));
  getHomeHotRecommendData().then(res => dispatch(changeRecommendInfo(res)))
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    productList: [],
    goodProductInfo: {},
    discountInfo: {},
    recommendInfo: {}
  },
  reducers: {
    changeGoodProductList(state, { payload }) {
      state.goodProductList = payload;
    },
    changeGoodProductInfo(state, { payload }) {
      state.goodProductInfo = payload;
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfo(state, { payload }) {
      state.recommendInfo = payload;
    }
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     console.log("fetchHomeDataAction.fulfilled payload:", payload);
  //     state.goodProductData = payload
  //   }
  // }
});

// 同步Action
export const { changeGoodProductInfo, changeDiscountInfo, changeRecommendInfo } = homeSlice.actions;

export default homeSlice.reducer;
