import React, { Fragment, memo } from "react";
import PropsTypes from "prop-types";

import { SectionRoomsWrapper } from "./style";
import RoomItem from "../room-item";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth = "25%" } = props;

  return (
    <SectionRoomsWrapper>
      <ul className="room-content">
        {roomList.map((i) => (
          <Fragment key={i.id}>
            <RoomItem itemData={i} itemWidth={itemWidth} />
          </Fragment>
        ))}
      </ul>
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropsTypes.array.isRequired,
  itemWidth: PropsTypes.string
};

export default SectionRooms;
