import { UIActions } from "../slices/UI_slice";
import { cartListActions } from "../slices/cart_slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://foodapp-1dcca-default-rtdb.firebaseio.com/cartList.json"
      );

      console.log("====fetched data", await response.json());
      //   dispatch(cartListActions.addToCartList(data));
    } catch (err) {
      dispatch(
        UIActions.showNotification({
          status: "failed",
          title: "Error!",
          message: "fetching cart Items failed",
        })
      );
    }
  };
};

export const sendCartData = (cartList) => {
  return async (dispatch) => {
    try {
      dispatch(
        UIActions.showNotification({
          status: "pending",
          title: "...sending",
          message: "adding to cart",
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
          message: "added to cart",
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
