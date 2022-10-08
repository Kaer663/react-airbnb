import styled from "styled-components";

const RightWrapper = styled.nav`
  flex:1;
  display: flex;
  justify-content: flex-end;
  color: ${prop => prop.theme.text.primaryColor};
  .btn{
    display: flex;
    span {
      background: transparent;
      border: 0;
      cursor: pointer;
      margin: 0;
      text-align: inherit;
      padding: 12px;
      font-weight: 600;
    }
  }
  .profile{
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px 5px 5px 12px;
    cursor: pointer;
    margin: 0;
    text-align: inherit;
    border-radius: 21px;
    border: 1px solid #DDD;
    ${prop => prop.theme.mixin.boxShadow}
    .user {
      width: 30px;
      height: 30px;
      margin-left: 12px;
    }
    .panel {
      display: none;
      position: absolute;
      top: 60px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,0.2);
      color: #666;
      .top,.bottom {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        .item{
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &.register{
            font-weight: 600;
          }
          &:hover{
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #DDD;
      }
    }
  }
`;

export default RightWrapper;
