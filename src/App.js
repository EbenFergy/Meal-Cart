import React from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./config/firebase";
import Header from "./Components/Header/Header";
import { AppStyle, NoView } from "./AppStyle";
import MealSection from "./Components/Meals/MealSection";
import { useGetFoodsQuery } from "./Redux/slices/foodApiSlice";
import noView from "./assets/noView.gif";
import Footer from "./Components/Footer/Footer";
// import SignIn from "./pages/Auth/SignIn";
// import SignUp from "./pages/Auth/SignUp";
import Spinner from "./Components/Spinner/Spinner";
import { useSelector } from "react-redux";
import Notification from "./Components/Notifications/Notification";

const App = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    data: foodApiData,
  } = useGetFoodsQuery();

  const showNotification = useSelector(
    (state) => state.UIStatus.showNotification
  );

  console.log(typeof showNotification, "...showing note");
  return (
    <>
      <NoView>
        <div>
          <img src={noView} alt="noView" />
        </div>
        <div>No view for smaller screens yet...</div>
      </NoView>
      <AppStyle>
        <Header />
        {isLoading && <Spinner />}
        {isSuccess && <MealSection apiData={foodApiData.hits} />}
        <div className="notificationCont">
          {showNotification && (
            <Notification
              status={showNotification.status}
              title={showNotification.title}
              message={showNotification.message}
            />
          )}
        </div>

        <Footer />
      </AppStyle>
    </>
  );
};

export default App;
