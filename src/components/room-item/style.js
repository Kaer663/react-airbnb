import styled from "styled-components";


export const RoomItemWrapper = styled.div`
  width: 25%;
  padding: 8px;
  .inner{
    width: 100%;
    .cover{
      position: relative;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .desc{
    margin:10px 0 5px;
    color:${props => props.verifyColor};
    font-size:12px;
    font-weight: 700;
  }
  .name{
    font-size: 14px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price{
    margin:8px 0;
  }
  .bottom{
    display: flex;
    align-items: center;
    font-size:12px;
    font-weight:600;
    color:${props => props.theme.text.primaryColor};
    .MuiRating-root{
      margin-left: -2px;
    }
  }
`;