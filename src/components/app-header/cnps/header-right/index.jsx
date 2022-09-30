import React, { memo } from "react";

import { RightWrapper } from "./style";

export default memo(function InLeft() {
  return (
    <RightWrapper>
      <div className="btn">
        <span>登录</span>
        <span>注册</span>
        <span>图标</span>
      </div>
      <div className="profile"></div>
      <h2>Right 这是一个计算属性 </h2>
    </RightWrapper>
  );
});
