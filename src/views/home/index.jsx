import { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./cnps/banner";
import HomeContent from "./cnps/content";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section_rooms";
import SectionTabs from "@/components/section-tabs";

export default memo(function Home() {
  const dispatch = useDispatch();
  const { goodProductInfo, discountInfo } = useSelector(
    (state) => ({
      goodProductInfo: state.homeReducer.goodProductInfo,
      discountInfo: state.homeReducer.discountInfo
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  const [tabName, setTabName] = useState("佛山");
  const tabClickHandle = useCallback((name) => setTabName(name), []);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="home-page">
        <div className="discount">
          <SectionHeader title={discountInfo.title} />
          <SectionTabs
            tabNames={discountInfo.dest_address?.map((i) => i.name)}
            tabClick={tabClickHandle}
          />
          <SectionRooms
            roomList={
              (discountInfo.dest_list && discountInfo.dest_list[tabName]) || []
            }
            itemWidth="33.3333%"
          />
        </div>
        <HomeContent goodProductData={goodProductInfo} />
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
