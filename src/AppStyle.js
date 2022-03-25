import styled from "styled-components";

const AppStyle = styled.div`
  * {
    box-sizing: border;
  }
  background-color: rgba(14, 17, 26, 1);
  color: #ffff;
  max-width: 100vw;
  /* border: 2px solid blue; */

  .noView {
    display: none;
  }

  @media only screen and (max-width: 1200px) {
   display:none ;

    .noView {
      display: block;
    }
  }
`;

export default AppStyle;
