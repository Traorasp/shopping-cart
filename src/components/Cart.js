import cart from '../Images/cart.png'
import React, { useState }from 'react';

function Cart() {
  const [open, setOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (e) => {
    const newItem = e.target.textContent;
    setCartItems(newItem)
  }

  const toggleCart = () => {
    setOpen(!open)
  }

  if(open) {
    return(
      <div id='cart'>
        <div>
          <h3 onClick={toggleCart}>Back</h3>
          <h2>Cart</h2>
          {cartItems.map((item) => {
            <div>
            <p>{item}</p>
            <button onClick={addItemToCart}></button>
            </div>
          })}
          <button>Checkout</button>
        </div>
      </div>
    )
  } else {
  return (
    <div>
      <img src={cart} alt='Shopping Cart' onClick={toggleCart}/>
      <p>Count</p>
    </div>
  );
  }
}

export default Cart;
