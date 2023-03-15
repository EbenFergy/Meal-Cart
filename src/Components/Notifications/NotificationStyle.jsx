import styled from "styled-components";

const NotificationStyle = styled.div`
  background-color: ${({ status }) => {
    if (status === "pending") return "#339cc6";
    if (status === "success") return "green";
    if (status === "failed") return "red";
  }};
  position: relative;
  z-index: 100;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  width: 80vw;

  box-sizing: border-box;

  #title {
    font-weight: 800;
    font-size: 1.1rem;
  }
`;
export default NotificationStyle;
