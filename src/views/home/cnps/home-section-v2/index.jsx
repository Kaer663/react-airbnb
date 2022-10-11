import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";

import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section_rooms";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData, itemWidth = "33.33333%" } = props;
  const initializeTab = infoData.dest_address?.[0].name;
  const [tabName, setTabName] = useState(initializeTab || "");
  const tabClickHandle = useCallback((name) => setTabName(name), []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs
        tabNames={infoData.dest_address?.map((i) => i.name)}
        tabClick={tabClickHandle}
      />
      <SectionRooms
        roomList={infoData.dest_list?.[tabName] || []}
        itemWidth={itemWidth}
      />
      <SectionFooter title={tabName} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
  itemWidth: PropTypes.string
};

export default HomeSectionV2;
