import styled from "styled-components";

const MealStyle = styled.div`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px 10px ;
  justify-content: center;
  /* border: 2px solid; */
  margin: 0;

  .meal-cont {
    height: 300px;
    border: 2px solid;
    border-radius: 10px;
    margin: 0;
  }
`;

export default MealStyle;
