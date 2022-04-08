import React, { useState } from "react";
import FilterStyle from "./FilterStyle";

const Filter = ({ CountryNames, filter, controlFilter }) => {
  const [allBG, setAllBG] = useState(true);

  //   const turnOnAllBGHandler=()=>{
  //       setAllBG(true);
  //   }

  const filterParamsHandler = (country) => {
    setAllBG(false);
    filter(country);
    controlFilter(true);
  };
  return (
    <FilterStyle allBG={allBG}>
      <div id="All" className="All" onClick={() => controlFilter(false)}>
        <a href="#All">All</a>
      </div>
      {CountryNames.map((country) => {
        return (
          <div id={country} onClick={() => filterParamsHandler(country)}>
            <a href={`#${country}`}>{country}</a>
          </div>
        );
      })}
    </FilterStyle>
  );
};

export default Filter;
