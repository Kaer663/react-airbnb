import React, { memo } from "react";
import HeaderCenter from "./cnps/header-center";
import HeaderLeft from "./cnps/header-left";
import HeaderRight from "./cnps/header-right";

import { HeaderWrapper } from "./style";
export default memo(function InFooter() {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});
