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
  display: flex;
  align-items: center;
  justify-content: center;

  .header {
    width: 100%;
    height: 16%;
    background-color: #ff7300;
    /* border: 2px solid; */
    align-self: flex-start;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 400;
    color: #ffff;
  }
`;

export default CartStyle;
