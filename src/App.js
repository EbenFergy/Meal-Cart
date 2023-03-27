import React, { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./config/firebase";
import Header from "./Components/Header/Header";
import { AppStyle, NoView } from "./AppStyle";
import MealSection from "./Components/Meals/MealSection";
import RecipeApi from "./api/RecipeApi";
import { useGetFoodsQuery } from "./Redux/slices/foodApiSlice";
import noView from "./assets/noView.gif";
import Footer from "./Components/Footer/Footer";
// import SignIn from "./pages/Auth/SignIn";
// import SignUp from "./pages/Auth/SignUp";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./Components/Notifications/Notification";
import { sendCartData, fetchCartData } from "./Redux/actions/cart_actions";

let sendRequest = false;
const App = () => {
  const cartList = useSelector((state) => state.cartList.cartList);
  const showNotification = useSelector(
    (state) => state.UIStatus.showNotification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (sendRequest === false) {
      sendRequest = true;
      return;
    }

    dispatch(sendCartData(cartList));
  }, [cartList, dispatch]);

  const { isLoading, isSuccess, isError, data } = useGetFoodsQuery();

  console.log("data from useGetFoodsQuery", data);
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
