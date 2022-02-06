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
    font-weight: 700;
    color: #ffff;
  }

  .cartitems {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    /* border: 2px solid red; */
    height: 84%;
    padding-top: 2rem;
    /* margin-top: 5rem; */
    /* scroll-behavior: smooth; */
    overflow-y: auto;

    .eachItem {
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* gap: 1rem; */
      /* background-color: rgba(220, 220, 220, 1); */
      width: 80%;
      padding: 1rem 3rem;
      border-bottom: 1px solid rgba(210, 210, 210, 1);

      div {
        width: 20%;
        /* border: 2px solid red;  */
        text-align: center;
      }

      img {
        width: 8rem;
        border-radius: 50%;
      }

      .itemName {
        text-align: left;
      }
    }
  }
`;

export default CartStyle;
