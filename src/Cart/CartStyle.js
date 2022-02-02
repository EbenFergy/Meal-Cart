import styled from "styled-components";

const CartStyle = styled.div`
  * {
    box-sizing: border-box;
  }

  background-color: rgba(230, 230, 230, 1);
  height: 80vh;
  width: 60vw;
  border-radius: 10px;
  overflow: hidden;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  justify-content: center;

  .header {
    width: 100%;
    height: 16%;
    background-color: #ff7300;
    /* border: 2px solid; */
    /* position: relative; */
    /* top: 0; */
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 400;
    color: #ffff;
  }

  .cartitems {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    /* border: 2px solid red; */
    height: 84%;
    padding-top: 2rem;
    /* margin-top: 5rem; */
    /* scroll-behavior: smooth; */
    overflow-y: auto;

    .eachItem {
      display: flex;
      gap: 1rem;

      img {
        width: 10rem;
      }
    }
  }
`;

export default CartStyle;
