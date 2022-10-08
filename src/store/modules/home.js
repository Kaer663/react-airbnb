import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getHomeGoodPriceData } from "@/services/modules/home"

// 异步请求代码
export const fetchHomeDataAction = createAsyncThunk("fetchData", () => getHomeGoodPriceData())

const homeSlice = createSlice({
  name: "home",
  initialState: {
    productList: [],
    goodProductData: {}
  },
  reducers: {
    changeGoodProductList(state, { payload }) {
      state.goodProductList = payload;
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodProductData = payload;
    }
  }
});

// 同步Action
export const { changeGoodProductList } = homeSlice.actions;

export default homeSlice.reducer;
