import PropTypes from "prop-types";
import React, { memo } from "react";

import { FooterWrapper } from "./style";
import MoreArrow from "@/assets/image/svg-jsx/more-arrow";

const SectionFooter = memo((props) => {
  const { title } = props;
  const color = title ? "#00848A" : "#484848";

  return (
    <FooterWrapper color={color}>
      <div className="info">
        <div className="text">
          {title ? `查看更多${title}房源` : "显示全部"}
        </div>
        <MoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  title: PropTypes.string
};

export default SectionFooter;
