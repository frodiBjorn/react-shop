import React from 'react'
import CartItem from './CartItem';


const CartList = (props) => {
    const {order=[],
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype
    } = props
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)
  return (
    <ul className="collection cart-list">
        <i className="material-icons cart-close" onClick={handleCartShow}>close</i>
        <li className="collection-item active">Cart</li>
        {
            order.length ? order.map(item => (
                <CartItem ket={item.id}{...item} removeFromCart={removeFromCart} decQuantity={decQuantity} incQuantity={incQuantity}/>
            )) : <li className="collection-item ">Cart is empty</li>
        }
        <li className="collection-item active">
            Total price: {totalPrice} coin
        </li>
        <li className="collection-item ">
            <button className="btn-small">Order</button>
        </li>
      </ul>
  )
}

export default CartList