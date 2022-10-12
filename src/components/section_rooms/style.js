import styled from "styled-components";

export const SectionRoomsWrapper = styled.div`
  .room-content{
    display: flex;
    ${props => props.isScroll ? "" : "flex-wrap: wrap;"}
    margin: 0 -8px;
  }
  .scroll{
    overflow: hidden;
  }
`;