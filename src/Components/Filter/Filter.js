import React, { useState } from "react";
import FilterStyle from "./FilterStyle";

const Filter = ({ CountryNames }) => {
  const [allBG, setAllBG] = useState(true);

  //   const turnOnAllBGHandler=()=>{
  //       setAllBG(true);
  //   }

  const turnOffAllBGHandler = () => {
    setAllBG(false);
  };
  return (
    <FilterStyle allBG={allBG}>
      <div id="All" className="All">
        <a href="#All">All</a>
      </div>
      {CountryNames.map((country) => {
        return (
          <div id={country} onClick={turnOffAllBGHandler}>
            <a href={`#${country}`}>{country}</a>
          </div>
        );
      })}
    </FilterStyle>
  );
};

export default Filter;
