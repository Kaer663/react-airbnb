import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin: 10px 0 0 0;
  .info{
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    color: ${props => props.color};
    padding: 4px 0px;
    text-align: left;
    box-shadow: none;
    .text {
      font-weight: 600;
      font-size: 17px;
      line-height: 22px;
      display: inline;
      margin-right: 6px;
    }
  }
`;