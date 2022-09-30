import React, { memo } from "react";

import Logo from "@/assets/image/svg-jsx/logo";
import { LeftWrapper } from "./style";

export default memo(function InLeft() {
  return (
    <LeftWrapper>
      <div className="logo">
        <Logo />
      </div>
    </LeftWrapper>
  );
});
