import styled from "styled-components";

const AppStyle = styled.div`
  background-color: rgba(14, 17, 26, 1);
  color: #ffff;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  .check {
    z-index: 10;
    position: absolute;
  }
`;

export default AppStyle;
