import React, { memo } from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "./style";

const SectionHeader = memo(() => {
  return <HeaderWrapper></HeaderWrapper>;
});

SectionHeader.PropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default SectionHeader;
