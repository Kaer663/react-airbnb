import styled from "styled-components";

export const LongForItemWrapper = styled.div`
  flex-shrink:0;/*flex布局不压缩宽度 */
  position: relative;
  width: ${props => props.itemWidth};
  padding: 3px;
  .cover-main{
    cursor: pointer;
    position: relative;
  }
  .cover{
    width: 100%;
    border-radius: 10px;
  }
  .bg-cover{
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0) 3%, rgb(0,0,0) 100%);
  }
  .info{
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
    .city,.price{
      margin: 0px;
      overflow-wrap: break-word;
      color: rgb(255, 255, 255);
      text-align: center;
    }
    .city{
      font-size: 18px;
      font-weight: 800;
      line-height: 1.44444em;
    }
    .price{
      font-size: 14px;
      font-weight: 600;
      line-height: 1.28571em;
    }
  }
`;