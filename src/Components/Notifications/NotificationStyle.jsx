import styled from "styled-components";

const NotificationStyle = styled.div`
  background-color: green;
  position: relative;
  z-index: 100;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  width: 80vw;

  box-sizing: border-box;

  #head {
    font-weight: 800;
    font-size: 1.1rem;
  }
`;
export default NotificationStyle;
