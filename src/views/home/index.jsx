import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./cnps/banner";
import HomeContent from "./cnps/content";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV2 from "./cnps/home-section-v2";
import { isEmpty } from "@/utils/is-object-empty";
import LongFor from "./cnps/home-long-for";
import HomeSectionV3 from "./cnps/home-section-v3";

export default memo(function Home() {
  const dispatch = useDispatch();
  const {
    goodProductInfo,
    discountInfo,
    recommendInfo,
    longForInfo,
    plusRoomsInfo
  } = useSelector(
    (state) => ({
      goodProductInfo: state.homeReducer.goodProductInfo,
      discountInfo: state.homeReducer.discountInfo,
      recommendInfo: state.homeReducer.recommendInfo,
      longForInfo: state.homeReducer.longForInfo,
      plusRoomsInfo: state.homeReducer.plusRoomsInfo
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="home-page">
        <div className="discount">
          {!isEmpty(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        </div>
        <div className="recommend">
          {!isEmpty(recommendInfo) && (
            <HomeSectionV2 infoData={recommendInfo} />
          )}
        </div>
        <div className="good-prod">
          {!isEmpty(goodProductInfo) && (
            <HomeContent goodProductData={goodProductInfo} />
          )}
        </div>
        <div className="long-for">
          {!isEmpty(longForInfo) && <LongFor infoData={longForInfo} />}
        </div>
        <div className="plus">
          {!isEmpty(plusRoomsInfo) && (
            <HomeSectionV3 infoData={plusRoomsInfo} />
          )}
        </div>
      </div>
    </HomeWrapper>
  );
});
