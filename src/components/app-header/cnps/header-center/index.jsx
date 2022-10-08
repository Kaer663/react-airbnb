import React, { memo } from "react";

import { CenterWrapper } from "./style";
import Search from "@/assets/image/svg-jsx/search";

export default memo(function InLeft() {
  return (
    <CenterWrapper>
      <div className="button">
        <div className="little-search">
          <span>搜索房源和体验</span>
          <div className="little-search-icon">
            <Search />
          </div>
        </div>
      </div>
    </CenterWrapper>
  );
});
