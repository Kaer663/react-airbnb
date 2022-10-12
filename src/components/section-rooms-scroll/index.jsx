import PropTypes from "prop-types";
import React, { memo } from "react";

import { SectionWrapper } from "./style";
import RoomItem from "../room-item";

const SectionRoomsScroll = memo((props) => {
  const { roomList = [], itemWidth = "25%" } = props;

  return <SectionWrapper>SectionRoomsScroll</SectionWrapper>;
});

SectionRoomsScroll.propTypes = {};

export default SectionRoomsScroll;
