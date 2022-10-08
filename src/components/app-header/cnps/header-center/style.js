import styled from "styled-components";

export const CenterWrapper = styled.div`
  min-width: 348px;
  padding: 0 24px;
  text-align: center;
  .button{
    padding: 0 0 0 8px;
    border-radius: 40px;
    border: 1px solid #DDD;
    cursor: pointer;
    .little-search{
      display: flex;
      align-items: center;
      text-align: left;
      span{
        padding: 0 16px;
        line-height: 18px;
        font-weight: 600;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
      }
      .little-search-icon{
        margin: 7px 7px 7px 0;
        padding: 10px;
        color: #fff;
        background-color: ${prop => prop.theme.color.primaryColor};
        border-radius: 50%;
      }
    }
  } 
`;
