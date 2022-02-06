import styled from "styled-components";

const AppStyle = styled.div`
* {
  box-sizing: border;
}
  background-color: rgba(14, 17, 26, 1);
  color: #ffff;
  max-width: 100vw;
  /* border: 2px solid blue; */

  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default AppStyle;
