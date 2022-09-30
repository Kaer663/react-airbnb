import React, { memo } from "react";

import { RightWrapper } from "./style";

export default memo(function InLeft() {
  return (
    <RightWrapper>
      <h2>Right 这是一个计算属性 </h2>
    </RightWrapper>
  );
});
