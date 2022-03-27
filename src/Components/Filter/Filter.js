import React from "react";
import FilterStyle from "./FilterStyle";

const Filter = ({ CountryNames }) => {
  return (
    <FilterStyle>
      <div>All</div>
      {CountryNames.map((country) => {
        return (
          <div id={country}>
            <a href={`#${country}`}>{country}</a>
          </div>
        );
      })}
    </FilterStyle>
  );
};

export default Filter;
