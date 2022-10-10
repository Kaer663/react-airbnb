import styled from "styled-components";

export const TabsWrapper = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
  .location{
    white-space: nowrap;
    overflow-x: hidden;
    padding: 16px 8px;
    margin: -16px -8px;
    .main{
      display: flex;
      .item{
        flex-basis: 120px;
        flex-shrink: 0;
        padding: 14px 16px;
        margin-right: 16px;
        border-radius: 3px;
        border: solid 0.5px rgba(0,0,0,0.18);
        box-shadow: 0 1px 1px rgba(0,0,0,0.18);
        ${props => props.theme.mixin}
        font-size: 17px;
        text-align: center;
        font-weight: bold;
        line-height: 20px;
        outline: none;
        cursor: pointer;
        &:last-child{
          margin-right: 0;
        }
        &.active{
          color: #ffffff;
          background: ${props => props.theme.color.secondaryColor};
          border: solid 0.5px ${props => props.theme.color.secondaryColor};
        }
      }
    }
  }
`;