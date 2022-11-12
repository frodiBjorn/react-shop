import React from 'react'

const Cart = (props) => {
    const {quantity = 0, handleCartShow = Function.prototype} = props
  return (
    <div className='cart orange darken-1 white-text' onClick={handleCartShow}>
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}

export default Cart