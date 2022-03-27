import styled from "styled-components";
import {
  transthisguy,
  IncreaseHeight,
  slideUp,
  zoomIn,
} from "../../animation/animation";

const MealStyle = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  padding: 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 60px 15px;
  justify-content: center;
  /* border: 2px solid yellow; */
  margin: 0;
  max-width: 100vw;
  box-sizing: border-box;

  .meal-cont {
    height: 200px;
    width: 100%;
    border-radius: 5px;
    margin: 0;
    background-color: #c4c4c4;
    overflow: hidden;
  }

  .meal-cont img {
    width: 100%;
    animation: ${zoomIn} 0.4s ease-in forwards;
  }

  .addBtn {
    width: 8rem;
    animation: ${slideUp} 0.5s ease-in forwards;

    /* background-color: #ff593d; */
  }

  .innerMeal {
    display: none;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 300px;
    width: 100%;
    /* padding: 0.2rem 0.2rem; */

    height: fit-content;
    border-radius: 10px;
    background: rgba(14, 17, 26, 1);
    /* border: 1px solid rgba(37, 46, 90, 1); */
    opacity: 0;
    overflow: hidden;
    box-shadow: 0px 0px 6px 2px rgba(5, 8, 17, 1);
    object-fit: contain;
  }

  .mainMeal {
    position: relative;
    /* border: 2px solid green; */
  }

  .mainMeal:hover .innerMeal {
    display: block;
    animation: ${transthisguy} 0.4s ease-in forwards;
    position: absolute;
    /* width: 90%; */

    .meal-cont {
      border-radius: 10px 10px 0 0;
    }

    .meal-cont__detail {
      animation: ${IncreaseHeight} 0.2s ease-in forwards;
      .meal-name {
        span {
          animation: ${slideUp} 0.4s ease-in 0.1s forwards;
        }

        p {
          animation: ${slideUp} 0.4s ease-in forwards;
        }
      }
    }
  }
  .meal-cont__detail {
    height: 0;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* margin-top: 0.5rem; */
    padding: 1rem 1.5rem;
    gap: 0.5rem;
    /* border: 2px solid; */
  }

  .meal-name {
    gap: 0.5rem;
    font-weight: 550;
    font-size: 0.9rem;
    opacity: 0.9;
    /* border: 2px solid; */

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .meal-form {
    display: flex;
    /* border: 2px solid; */
    justify-content: space-between;
  }

  .meal-price {
    /* color: #ff7300; */
    color: #46d369;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .input-cont {
    align-self: flex-end;
    /* animation: ${slideUp} 0.4s ease-in forwards; */
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
`;

export default MealStyle;
