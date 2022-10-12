import React, { memo } from "react";
import PropTypes from "prop-types";

import { LongForItemWrapper } from "./style";

const LongForItem = memo((props) => {
  const { itemData = {}, itemWidth = "20%" } = props;
  return (
    <LongForItemWrapper itemWidth={itemWidth}>
      <div className="cover-main">
        <img className="cover" src={itemData.picture_url} alt="" />
        <div className="bg-cover"></div>
        <div className="info">
          <div className="city">{itemData.city}</div>
          <div className="price">{itemData.price}</div>
        </div>
      </div>
    </LongForItemWrapper>
  );
});

LongForItem.propType = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
};

export default LongForItem;
