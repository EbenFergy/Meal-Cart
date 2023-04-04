import React, { useEffect, useState } from "react";
import CartStyle from "./CartStyle";
import { BackDrop, ModalStyle } from "../ReUsables/Modal/ModalStyle";
import Button from "../ReUsables/Button";
// import _ from "lodash";
import emptycart from "../../assets/empty-cart2.gif";
import CartCounter from "../CartCounter/CartCounter";
import { useDispatch } from "react-redux";
import { UIActions } from "../../Redux/slices/UI_slice";
import Spinner from "../Spinner/Spinner";
import {
  useGetCartListQuery,
  useDeleteFromCartListMutation,
} from "../../Redux/slices/cartApiSlice";

export const BackDropper = ({ closeCart }) => {
  return <BackDrop onClick={closeCart}></BackDrop>;
};

export const Cart = ({ closeCart }) => {
  const [totalPrice, setTotalPrice] = useState(0.0);

  const dispatch = useDispatch();

  const { isLoading, isSuccess, data: cartList } = useGetCartListQuery();

  const [deleteFromCartList] = useDeleteFromCartListMutation();

  // reducer function for cartPrice
  useEffect(() => {
    if (isSuccess && cartList) {
      const price = cartList.reduce((accumulator, item) => {
        return item.price * item.quantity + accumulator;
      }, 0);
      setTotalPrice(price);
    }
  }, [cartList, isSuccess]);

  const cartListLength = isSuccess && cartList.length;

  const removeHandler = async (id) => {
    try {
      dispatch(
        UIActions.showNotification({
          status: "pending",
          title: "removing!",
          message: "removing item from cart",
        })
      );
      const newCartList = JSON.parse(JSON.stringify(cartList));
      let newList = newCartList.filter((item) => item.id !== id);
      await deleteFromCartList(newList);

      dispatch(
        UIActions.showNotification({
          status: "success",
          title: "removed!",
          message: "removed item from cart",
        })
      );

      setTimeout(() => {
        dispatch(UIActions.showNotification(null));
      }, 2000);
    } catch (err) {
      dispatch(
        UIActions.showNotification({
          status: "failed",
          title: "Error!",
          message: "couldn't remove item from cart",
        })
      );
    }
  };
  return (
    <ModalStyle>
      <CartStyle>
        <div className="header">Cart Items</div>
        <div className="cartitems">
          {isLoading && <Spinner />}
          {isSuccess && cartListLength > 0 ? (
            cartList.map((item) => {
              return (
                <div key={item.price} className="eachItem">
                  <div className="image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="itemName">{item.name}</div>
                  <div>${item.price}</div>
                  <div className="counterCont">
                    {/* {item.quantity} */}
                    <CartCounter id={item.id} quantity={item.quantity} />
                  </div>
                  <div
                    className="remove"
                    onClick={() => removeHandler(item.id)}
                  >
                    Remove{" "}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="emptyCartDisplay">
              <img src={emptycart} alt="empty-cart" className="emptyCart" />
              <h2>Cart is empty</h2>
              <div>Looks like you haven't made a selection yet...</div>
            </div>
          )}
        </div>
        <div className="footer">
          <div className="footerPrice">
            Total: <span> ${totalPrice}</span>
          </div>
          <div className="right">
            {cartListLength > 0 && (
              <Button className="payBtn">Proceed to Pay</Button>
            )}
            <Button onClick={closeCart} className="closeBtn">
              Close
            </Button>
          </div>
        </div>
      </CartStyle>
    </ModalStyle>
  );
};

// export default Cart;
