import React, {
  memo,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  useEffect
} from "react";
import { fromEvent } from "rxjs";

import RightWrapper from "./style";
import More from "@/assets/image/svg-jsx/more";
import Global from "@/assets/image/svg-jsx/global";
import User from "@/assets/image/svg-jsx/user";

const Panel = memo(
  forwardRef((_, ref) => {
    const panelRef = useRef();
    useImperativeHandle(
      ref,
      () => ({
        set visible(value) {
          if (value) {
            panelRef.current.style.display = "block";
          } else {
            panelRef.current.style.display = "none";
          }
        }
      }),
      [panelRef]
    );

    return (
      <div className="panel" ref={panelRef}>
        <div className="top">
          <span className="item register">注册</span>
          <span className="item login">登录</span>
        </div>
        <div className="bottom">
          <span className="item">出租房源</span>
          <span className="item">开展体验</span>
          <span className="item">帮助</span>
        </div>
      </div>
    );
  })
);

export default memo(function InRight() {
  const [panelState, setPanelState] = useState(false);
  const panelRef = useRef();
  const handleUser = (e) => {
    e.stopPropagation();
    console.log(e.stopPropagation);
    panelRef.current.visible = !panelState;
    setPanelState(!panelState);
  };
  useEffect(() => {
    const windowClickSub = fromEvent(document, "click").subscribe((e) => {
      panelRef.current.visible = false;
      setPanelState(false);
    });
    panelRef.current.visible = panelState;
    return () => {
      windowClickSub.unsubscribe();
    };
  }, [panelState]);
  return (
    <RightWrapper>
      <div className="btn">
        <span>登录</span>
        <span>注册</span>
        <span>
          <Global />
        </span>
      </div>
      <div className="profile" onClick={(e) => handleUser(e)}>
        <More />
        <div className="user">
          <User />
        </div>
        <Panel ref={panelRef} />
      </div>
    </RightWrapper>
  );
});
