import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeBanner from "./cnps/banner";
import HomeContent from "./cnps/content";
import { fetchHomeDataAction } from "@/store/modules/home";

export default memo(function Home() {
  const dispatch = useDispatch();
  const { goodProductData } = useSelector(
    (state) => ({ goodProductData: state.homeReducer.goodProductData }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <div className="home-page">
      <HomeBanner />
      <HomeContent goodProductData={goodProductData} />
      <ul>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
    </div>
  );
});
