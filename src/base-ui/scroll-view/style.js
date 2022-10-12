import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  .control{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    transform: translate(0,-50%);
    background: rgba(255, 255, 255,0.9);
    border: 1xp solid transparent;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 14%) 0px 1px 1px 1px;
    z-index: 9;
    cursor: pointer;
    &:hover{
      background: rgb(255, 255, 255);
      transform: translate(0,-50%) scale(1.05);
    }
  }
  .left{
    left: -10px;
  }
  .right{
    right: -18px;
  }
`