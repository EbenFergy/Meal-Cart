import styled from "styled-components";

let All = "#ff7300";

const FilterStyle = styled.div`
  display: flex;
  align-items: center;
  /* justify-content:center ; */
  width: auto;
  /* height: 4rem; */
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  margin: 2rem auto;
  /* background-color: rgb(68, 75, 93); */
  overflow-x: auto;
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
