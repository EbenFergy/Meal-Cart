import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import Header from "./Components/Header/Header";
import { AppStyle, NoView } from "./AppStyle";
import MealSection from "./Components/Meals/MealSection";
import RecipeApi from "./api/RecipeApi";
import noView from "./assets/noView.gif";
import Footer from "./Components/Footer/Footer";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { useSelector } from "react-redux";
import Notification from "./Components/Notifications/Notification";

const App = () => {
  const cartList = useSelector((state) => state.cartList.cartList);

  /*
    send store items to database because 
    it can't be done in the Redux Store
  */

  useEffect(() => {
    fetch("https://foodapp-1dcca-default-rtdb.firebaseio.com/cartList.json", {
      method: "PUT",
      body: JSON.stringify(cartList),
    });
  }, [cartList]);
  return (
    <>
      <NoView>
        <div>
          <img src={noView} alt="noView" />
        </div>
        <div>No view for smaller screens yet...</div>
      </NoView>
      <AppStyle>
        <div className="notificationCont">
          <Notification />
        </div>
        <Header />
        <MealSection apiData={RecipeApi()} />

        <Footer />
      </AppStyle>
    </>
  );
};

export default App;
