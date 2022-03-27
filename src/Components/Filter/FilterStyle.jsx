import styled from "styled-components";

let All = "#ff7300";

const FilterStyle = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  padding: 1rem 1rem;
  border-radius: 5px;
  margin: 2rem auto;
  /* background-color: rgb(68, 75, 93); */
  overflow-x: auto;
  border: 2px solid rgb(68, 75, 93);

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
      background-color: ${All};

      a {
        color: #ffffff;
        font-weight: 500;
      }
    }
  }

  .All {
    ${({ allBG }) => allBG && `background-color:${All}`}
  }
`;
export default FilterStyle;
