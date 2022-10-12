import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";

import { SectionRoomsWrapper } from "./style";
import RoomItem from "../room-item";
import ScrollView from "@/base-ui/scroll-view";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth = "25%", isScroll = false } = props;

  const wrapView = (
    <ul className="room-content">
      {roomList.map((i) => (
        <Fragment key={i.id}>
          <RoomItem itemData={i} itemWidth={itemWidth} isScroll={isScroll} />
        </Fragment>
      ))}
    </ul>
  );

  const scrollView = (
    <ScrollView>
      <div className="scroll">{wrapView}</div>
    </ScrollView>
  );

  return (
    <SectionRoomsWrapper isScroll={isScroll}>
      {isScroll ? scrollView : wrapView}
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array.isRequired,
  itemWidth: PropTypes.string,
  isScroll: PropTypes.bool
};

export default SectionRooms;
