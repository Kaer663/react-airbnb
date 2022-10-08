import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeBanner from "./cpns/banner";
import { fetchHomeDataAction } from "@/store/modules/home";

export default memo(function Home() {
  const dispatch = useDispatch();
  const { goodProductData } = useSelector(
    (state) => ({ goodProductData: state.homeReducer.goodProductData }),
    shallowEqual
  );
  console.log("结果：", goodProductData);
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <div>
      <HomeBanner />
    </div>
  );
});
