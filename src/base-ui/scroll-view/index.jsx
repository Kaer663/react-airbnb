import React, { memo, useEffect, useRef, useState } from "react";

import LeftIcon from "@/assets/image/svg-jsx/left";
import RightIcon from "@/assets/image/svg-jsx/right";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const { children } = props;
  // 定义内部状态
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const scrollContentRef = useRef();
  const [posIndex, setPosIndex] = useState(0);
  const [nodeParent, setNodeParent] = useState();
  const [totalDistance, setTotalDistance] = useState(0);

  function handleControlClick(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = nodeParent.children[newIndex];
    setPosIndex(newIndex);
    nodeParent.style.transform = `translate(-${newEl.offsetLeft}px)`;
    setShowRight(totalDistance - newEl.offsetLeft > 0);
    setShowLeft(newEl.offsetLeft > 0);
  }

  useEffect(() => {
    let nodeItem = scrollContentRef.current;
    while (!(nodeItem.children && nodeItem.children.length > 1)) {
      nodeItem = nodeItem.children[0];
    }
    const scrollWidth = nodeItem.scrollWidth;
    const clientWidth = nodeItem.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    setShowRight(totalDistance > 0);
    setTotalDistance(totalDistance);

    nodeItem.style.transition = "transform 200ms ease";
    setNodeParent(nodeItem);
  }, []);

  return (
    <ViewWrapper>
      {showLeft && (
        <span className="control left" onClick={() => handleControlClick()}>
          <LeftIcon />
        </span>
      )}
      {showRight && (
        <span
          className="control right"
          onClick={() => handleControlClick(true)}
        >
          <RightIcon />
        </span>
      )}
      <div className="scroll-content" ref={scrollContentRef}>
        {children}
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
