import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import Header from "./Components/Header/Header";
import { AppStyle, NoView } from "./AppStyle";
import MealSection from "./Components/Meals/MealSection";
import MealProvider from "./Context_API/mealProvider";
import RecipeApi from "./api/RecipeApi";
import noView from "./assets/noView.gif";
import Footer from "./Components/Footer/Footer";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { useSelector } from "react-redux";

const App = () => {
  // const [displayAuth, setDisplayAuth] = useState(true);

  return (
    <>
      <NoView>
        <div>
          <img src={noView} alt="noView" />
        </div>
        <div>No view for smaller screens yet...</div>
      </NoView>
      <AppStyle>
        <MealProvider>
          <Header />
          <MealSection apiData={RecipeApi()} />
        </MealProvider>

        <Footer />
      </AppStyle>
    </>
  );
};

export default App;
