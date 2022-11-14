import React, { useContext } from "react";
import { ShopContext } from "./../context";

const Cart = () => {
  const { order, handleCartShow = Function.prototype } =
    useContext(ShopContext);

  const quantity = order.length;
  return (
    <div className="cart orange darken-1 white-text" onClick={handleCartShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
