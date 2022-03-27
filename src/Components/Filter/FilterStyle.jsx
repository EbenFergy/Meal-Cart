import styled from "styled-components";

const FilterStyle = styled.div`
  display: flex;
  align-items: center;
  /* height: 4rem; */
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  margin: 2rem 0;
  /* background-color: rgb(68, 75, 93); */
  border: 1px solid rgb(68, 75, 93);
  /* border: 2px solid red; */

  div {
    padding: 1rem 2rem;
    border-radius: 5px;
    font-weight: 300;
    /* border: 2px solid gold; */

    a {
      color: #ffffffc0;
      text-decoration: none;
    }
    :target {
      /* background-color: #ff7300; */
      background-color: rgb(25, 166, 100);

      a {
        color: #ffffff;
      }
    }
  }
`;
export default FilterStyle;
