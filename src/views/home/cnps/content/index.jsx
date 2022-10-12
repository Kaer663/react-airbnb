import React, { memo } from "react";
import PropTypes from "prop-types";

import { ContentWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section_rooms";

const HomeContent = memo((props) => {
  const { goodProductData = {} } = props;

  return (
    <ContentWrapper>
      <SectionHeader title={goodProductData.title} />
      <SectionRooms roomList={goodProductData.list || []} />
    </ContentWrapper>
  );
});

HomeContent.propType = {
  goodProductData: PropTypes.object
};

export default HomeContent;
