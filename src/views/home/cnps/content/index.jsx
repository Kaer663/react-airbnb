import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";

import { ContentWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";

const HomeContent = memo((props) => {
  const { goodProductData = {} } = props;
  console.log("home content good product:", goodProductData);

  return (
    <ContentWrapper>
      <SectionHeader title={goodProductData.title} />
      <ul className="room-content">
        {goodProductData.list?.map((i) => (
          <Fragment key={i.id}>
            <RoomItem itemData={i} />
          </Fragment>
        ))}
      </ul>
    </ContentWrapper>
  );
});

HomeContent.propType = {
  goodProductData: PropTypes.object
};

export default HomeContent;
