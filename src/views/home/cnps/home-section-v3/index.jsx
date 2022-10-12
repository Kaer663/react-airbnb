import PropTypes from "prop-types";
import React, { memo } from "react";

import { SectionV3Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section_rooms";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms
        roomList={infoData.list}
        itemWidth={"20%"}
        isScroll={true}
      />
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
};

export default HomeSectionV3;
