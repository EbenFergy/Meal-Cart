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
  /* border: 2px solid red; */

  .header {
    width: 100%;
    height: 12%;
    background-color: rgba(37, 46, 70, 1);
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

  .emptyCartDisplay {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 2px solid red; */
    height: 100%;

    img {
      height: 65%;
    }

    h2 {
      color: rgba(40, 40, 40);
    }

    div {
      color: rgba(80, 80, 80);
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 3rem;
    box-shadow: 2px -1px 10px rgba(200, 200, 200, 1);
    /* border: 2px solid red; */

    .right {
      display: flex;
      align-items: center;
      /* height: 12%; */
      justify-content: flex-end;
      padding-right: 2rem;
      gap: 1rem;
    }

    .footerPrice {
      font-weight: 600;
      font-size: 1.2rem;

      span {
        font-weight: 700;
        font-size: 1.6rem;
      }
    }
  }

  .payBtn {
    /* background-color: #ff0000; */
    background-color: rgb(25, 166, 100);
  }

  .closeBtn {
    /* background-color: rgba(37, 46, 70, 1); */
    border: 2px solid rgba(37, 46, 70, 1);
    background: none;
    color: rgba(37, 46, 70, 1);
  }

  .cartitems {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    /* border: 2px solid red; */
    height: 76%;
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
      width: 90%;
      padding: 1rem 3rem;
      border-bottom: 1px solid rgba(210, 210, 210, 1);
      /* border: 2px solid yellow; */

      div {
        width: 20%;
        /* border: 2px solid red; */
        text-align: center;
      }

      .counterCont {
        /* border: 2px solid orange; */
        width: fit-content;
      }

      .image {
        /* border: 2px solid red; */
      }

      img {
        width: 8rem;
        border-radius: 50%;
      }

      .itemName {
        text-align: left;
      }

      .remove {
        color: #ff7300;
        cursor: pointer;
        font-weight: 500;
      }
    }
  }
`;

export default CartStyle;
