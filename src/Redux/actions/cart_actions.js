import { UIActions } from "../slices/UI_slice";

export const sendCartData = (cartList) => {
  return async (dispatch) => {
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
};
