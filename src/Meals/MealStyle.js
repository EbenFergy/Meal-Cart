import styled from "styled-components";

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

  .meal-cont {
    height: 300px;
    border-radius: 10px;
    margin: 0;
    background-color: #c4c4c4;
    overflow: hidden;
  }

  .mealOverlay {
    transition: background-color 0.5s ease-in-out;
  }

  .addBtn {
    background-color: #ff593d;
  }

  .meal-cont:hover .mealOverlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: black;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .meal-cont:hover .mealOverlay::after {
    content: "Nice seasoned pasta";
    color: #c4c4c4;
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
    color: #ff593d;
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
    transition: transform 0.5s ease-in-out;
    border-radius: 10px;
  }

  .mainMeal {
    position: relative;
  }

  .mainMeal:hover .innerMeal {
    display: block;
    transform: ${(props) => props.transformVal};
  }
`;

export default MealStyle;
