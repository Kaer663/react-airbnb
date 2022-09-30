import React, { memo } from "react";

import { CenterWrapper } from "./style";

export default memo(function InLeft() {
  return (
    <CenterWrapper>
      <h2>Center</h2>
    </CenterWrapper>
  );
});
