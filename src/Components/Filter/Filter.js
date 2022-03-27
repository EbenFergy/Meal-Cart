import React from 'react'
import FilterStyle from './FilterStyle'

const Filter = ({CountryNames}) => {
   
  return (
    <FilterStyle>
        {CountryNames.map((country)=>{
            return <div>{country}</div>
        })}

    </FilterStyle>
    
  )
}

export default Filter