import styled from "styled-components";

export const AppStyle = styled.div`
  * {
    box-sizing: border-box;
  }
  background-color: rgba(14, 17, 26, 1);
  color: #ffff;
  /* border: 2px solid blue; */
  width: 100vw;

  .notificationCont {
    position: fixed;
    bottom: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    z-index: 100;

    /* border: 2px solid; */
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
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: lighter;

    div {
      padding: 1rem;
      text-align: center;

      img {
        max-width: 70vw;
      }
    }
    /* border: 2px solid green; */
  }
`;
