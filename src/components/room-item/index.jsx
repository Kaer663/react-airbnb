import React, { memo } from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";

import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData = {}, itemWidth = "25%" } = props;
  return (
    <RoomItemWrapper
      verifyColor={itemData.verify_info?.textColor || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
        <div className="bottom">
          <Rating
            name="simple-controlled"
            value={itemData.star_rating ?? 5}
            precision={0.5}
            sx={{
              color: itemData.star_rating_color || "#00848a",
              fontSize: "12px"
            }}
            readOnly
          />
          <span className="count">{itemData.star_rating}</span>
          {itemData.bottom_info?.content && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propType = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
};

export default RoomItem;
