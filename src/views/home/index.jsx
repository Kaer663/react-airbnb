import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./cnps/banner";
import HomeContent from "./cnps/content";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV2 from "./cnps/home-section-v2";
import { isEmpty } from "@/utils/is-object-empty";

export default memo(function Home() {
  const dispatch = useDispatch();
  const { goodProductInfo, discountInfo, recommendInfo } = useSelector(
    (state) => ({
      goodProductInfo: state.homeReducer.goodProductInfo,
      discountInfo: state.homeReducer.discountInfo,
      recommendInfo: state.homeReducer.recommendInfo
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
        {!isEmpty(goodProductInfo) && (
          <HomeContent goodProductData={goodProductInfo} />
        )}
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
    </HomeWrapper>
  );
});
