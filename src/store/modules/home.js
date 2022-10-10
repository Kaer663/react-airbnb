import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getHomeGoodPriceData, getHomeDiscountData } from "@/services/modules/home"

// 异步请求代码
export const fetchHomeDataAction = createAsyncThunk("fetchData", (_, { dispatch }) => {
  getHomeGoodPriceData().then(res => dispatch(changeGoodProductInfo(res)));
  getHomeDiscountData().then(res => dispatch(changeDiscountInfo(res)));
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    productList: [],
    goodProductInfo: {},
    discountInfo: {}
  },
  reducers: {
    changeGoodProductList(state, { payload }) {
      state.goodProductList = payload;
    },
    changeGoodProductInfo(state, { payload }) {
      state.goodProductInfo = payload;
    },
    changeDiscountInfo(state, { payload }) {
      console.log("change discount info:", payload);
      state.discountInfo = payload;
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
export const { changeGoodProductInfo, changeDiscountInfo } = homeSlice.actions;

export default homeSlice.reducer;
