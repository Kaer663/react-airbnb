import React, { Fragment, memo } from "react";
import PropsTypes from "prop-types";

import { SectionRoomsWrapper } from "./style";
import RoomItem from "../room-item";

const SectionRooms = memo((props) => {
  const { roomList = [] } = props;

  return (
    <SectionRoomsWrapper>
      <ul className="room-content">
        {roomList.map((i) => (
          <Fragment key={i.id}>
            <RoomItem itemData={i} />
          </Fragment>
        ))}
      </ul>
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropsTypes.array.isRequired
};

export default SectionRooms;
