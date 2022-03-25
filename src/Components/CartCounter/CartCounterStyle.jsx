import styled from "styled-components";

const CartCounterStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  Button {
    padding: 0.5rem 1rem;
  }

  .counterValue {
    /* font-size: 1.2rem; */
    font-weight: 700;
    display: flex;
    justify-content: center;
  }
`;

export default CartCounterStyle;
