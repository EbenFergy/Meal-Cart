import styled from "styled-components";

export const AppStyle = styled.div`
  * {
    box-sizing: border;
  }
  background-color: rgba(14, 17, 26, 1);
  color: #ffff;
  max-width: 100vw;
  /* border: 2px solid blue; */

  .noView {
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NoView = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  color: #ffffff;
  box-sizing: border-box;

  @media only screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 2px solid green; */
  }
`;
