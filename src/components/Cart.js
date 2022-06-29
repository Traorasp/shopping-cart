import cart from '../Images/cart.png'
import React, { useState, useEffect }from 'react';
import PropTypes from 'prop-types';

function Cart(props) {
  const [open, setOpen] = useState(false)
  const {itemsInCart, addItemToCart} = props;
  const [total, setTotal] = useState({
    totalAmount: 0,
    totalCost: 0,
  })

  const toggleCart = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const totalCost = itemsInCart.map((item) => {
      return item.Price * item.Amount;
    }).reduce((a, b) => a + b, 0);
    const totalAmount = itemsInCart.map((item) => {
      return item.Amount;
    }).reduce((a, b) => a + b, 0);
    setTotal({
      totalAmount: totalAmount,
      totalCost: totalCost,
    })
  }, [itemsInCart]);

  if(open) {
    return(
      <div id='cart-background'>
        <div id='cart'>
          <h3 onClick={toggleCart}>Back</h3>
          <h2>Cart</h2>
          <div className='cart-items-display'>
          {itemsInCart.map((item) => {
            return( 
              <div key={item.id} className='cart-item'>
                <img src={item.Img}/>
                <p>{item.Name}</p>
                <div className='counter'>
                <button onClick={addItemToCart} className={item.Name}>-</button>
                <p>{item.Amount}</p>
                <button onClick={addItemToCart} className={item.Name}>+</button>
                </div>
              </div>)
          })}
          </div>
          <button>Checkout</button>
        </div>
      </div>
    )
  } else {
  return (
    <div>
      <img src={cart} alt='Shopping Cart' onClick={toggleCart}/>
      <p>{total.totalAmount}</p>
    </div>
  );
  }
}

Cart.propTypes = {
  itemsInCart: PropTypes.array,
  addItemToCart: PropTypes.func,
}

Cart.defaultProps = {
  itemsInCart: [],
  addItemToCart: () => {},
}


export default Cart;
