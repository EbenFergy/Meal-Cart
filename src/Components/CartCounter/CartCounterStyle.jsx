import styled from "styled-components";

const CartCounterStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* border: 2px solid green; */
  background-color: #ff73001a;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;
  min-width: fit-content;

  Button {
    padding: 0.4rem 0.8rem;
    border-radius: 0;
  }

  .counterValue {
    /* font-size: 1.2rem; */
    font-weight: 700;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export default CartCounterStyle;
