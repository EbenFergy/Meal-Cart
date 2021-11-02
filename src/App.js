import React from "react";
import Header from "./Header/Header";
import AppStyle from "./AppStyle";
import Meals from "./Meals/Meals";

function App() {
  return (
    <AppStyle>
        <Header/>
        {/* <div className='check'></div> */}
        <Meals/>
    </AppStyle>
  );
}

export default App;
