import React, { useContext } from "react";
import CartStyle from "./CartStyle";
import { BackDrop, ModalStyle } from "../ReUsables/Modal/ModalStyle";
import mealContext from "../../Store/meal-Context";
import Button from "../ReUsables/Button";
import _ from "lodash";
import emptycart from "../../assets/empty-cart2.gif";
import CartCounter from "../CartCounter/CartCounter";

export const BackDropper = ({ closeCart }) => {
  return <BackDrop onClick={closeCart}></BackDrop>;
};

export const Cart = ({ closeCart }) => {
  const { cartList } = useContext(mealContext);
  const cartListLength = _.size(cartList);
  return (
    <ModalStyle>
      <CartStyle>
        <div className="header">Cart Items</div>
        <div className="cartitems">
          {cartListLength > 0 ? (
            cartList.map((item) => {
              return (
                <div key={item.price} className="eachItem">
                  <div className="image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="itemName">{item.name}</div>
                  <div>${item.price}</div>
                  <div>
                    {/* {item.quantity} */}
                    <CartCounter id ={item.id} quantity = {item.quantity} />
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
          {cartListLength > 0 && (
            <Button className="payBtn">Proceed to Pay</Button>
          )}
          <Button onClick={closeCart} className="closeBtn">
            Close
          </Button>
        </div>
      </CartStyle>
    </ModalStyle>
  );
};

// export default Cart;
