import styled, { keyframes } from "styled-components";

const transthisguy = keyframes`
0%{
    transform: scale(1);
    opacity: 0;
}
20%{
    /* transform: scale(1); */
    opacity: 1;
}
100%{
    transform: scale(1.2); 
    opacity: 1;
}
`;

const MealStyle = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px 10px;
  justify-content: center;
  /* border: 2px solid; */
  margin: 0;
  /* width: 100vw; */

  .meal-cont {
    height: 300px;
    border-radius: 10px;
    margin: 0;
    background-color: #c4c4c4;
    overflow: hidden;
  }

  ..meal-cont img {
    object-fit: cover;
  }

  .addBtn {
    /* background-color: #ff593d; */
  }

  .meal-cont__detail {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  .meal-name {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 700;
  }

  .meal-name span {
    color: #ff7300;
  }

  .input-cont {
    align-self: flex-end;
  }

  .amountInput {
    width: 5rem;
    border-radius: 5px;
    padding: 5px 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .innerMeal {
    display: none;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background: red;
    height: 300px;
    width: 100%;
    height: fit-content;
    border-radius: 10px;
    background: rgba(14, 17, 26, 1);
    border: 2px solid red;
    opacity: 0;
  }

  .mainMeal {
    position: relative;
  }

  .mainMeal:hover .innerMeal {
    display: block;
    animation: ${transthisguy} 0.4s ease-in-out 0.2s forwards;
  }
`;

export default MealStyle;
