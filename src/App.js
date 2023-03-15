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
import { useSelector, useDispatch } from "react-redux";
import Notification from "./Components/Notifications/Notification";
import { UIActions } from "./Redux/slices/UI_slice";

let sendRequest = false;
const App = () => {
  const cartList = useSelector((state) => state.cartList.cartList);
  const showNotification = useSelector(
    (state) => state.UIStatus.showNotification
  );
  const dispatch = useDispatch();
  /*
    send store items to database because 
    it can't be done in the Redux Store
  */

  useEffect(() => {
    const sendCartToDB = async () => {
      try {
        dispatch(
          UIActions.showNotification({
            status: "pending",
            title: "...sending",
            message: "sending data to database",
          })
        );
        const response = await fetch(
          "https://foodapp-1dcca-default-rtdb.firebaseio.com/cartList.json",
          {
            method: "PUT",
            body: JSON.stringify(cartList),
          }
        );

        dispatch(
          UIActions.showNotification({
            status: "success",
            title: "Success!",
            message: "sent data successfully",
          })
        );
      } catch (err) {
        dispatch(
          UIActions.showNotification({
            status: "failed",
            title: "Error!",
            message: "sending data failed",
          })
        );
      }
    };
    if (sendRequest === false) {
      sendRequest = true;
      return;
    }
    sendCartToDB();
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
        {showNotification && (
          <div className="notificationCont">
            <Notification
              status={showNotification.status}
              title={showNotification.title}
              message={showNotification.message}
            />
          </div>
        )}
        <Header />
        <MealSection apiData={RecipeApi()} />

        <Footer />
      </AppStyle>
    </>
  );
};

export default App;
