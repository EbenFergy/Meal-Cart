import { UIActions } from "../slices/UI_slice";
import { cartListActions } from "../slices/cart_slice";
import axios from "axios";

/*===================================================
        fetch cart Data from database on mount
=====================================================*/

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://foodapp-1dcca-default-rtdb.firebaseio.com/cartList.json"
      );
      const data = response.data;
      //   data && data.map((item) => dispatch(cartListActions.initialiseCartList(item)));
      dispatch(cartListActions.initialiseCartList(data));
      console.log("===== fetched data", data);
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

/*===================================================
            send cart Data to database
=====================================================*/
let firstTimeLoad = false;

export const sendCartData = (cartList) => {
  return async (dispatch) => {
    try {
      firstTimeLoad &&
        dispatch(
          UIActions.showNotification({
            status: "pending",
            title: "...sending",
            message: "adding to cart",
          })
        );

      const config = {
        url: "https://foodapp-1dcca-default-rtdb.firebaseio.com/cartList.json",
        method: "PUT",
        data: cartList,
      };
      await axios(config);

      firstTimeLoad &&
        dispatch(
          UIActions.showNotification({
            status: "success",
            title: "Success!",
            message: "added to cart",
          })
        );
      firstTimeLoad = true;
      setTimeout(() => {
        dispatch(UIActions.showNotification(null));
      }, 2000);
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
