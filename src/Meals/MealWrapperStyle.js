import styled from "styled-components";

const MealWrapperStyle = styled.div`
  width: 100%;

  .countryNames {
    margin: 5rem 2rem 0 2rem;
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0.7;
    cursor: pointer;

    :hover {
      opacity: 0.9;
      ::after {
        content: "Explore all";
        margin-left: 1rem;
        font-size: 1rem;
      }
    }
  }
`;

export default MealWrapperStyle;
