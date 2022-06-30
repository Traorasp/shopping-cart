import cart from '../Images/cart.png'
import React, { useState }from 'react';
import PropTypes from 'prop-types';

function Cart(props) {
  const [open, setOpen] = useState(false)
  const {itemsInCart, addItemToCart, total} = props;

  const toggleCart = () => {
    setOpen(!open)
  }


  if(open) {
    return(
      <div>
        <div onClick={toggleCart} id='cart-background'></div>
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
          <div className='checkout'>
            <p>Total: ${total.totalCost}</p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    )
  } else {
  return (
    <div className='cart-nav'>
      <img className='cart-logo' src={cart} alt='Shopping Cart' onClick={toggleCart}/>
      <p className='cart-count'>{total.totalAmount}</p>
    </div>
  );
  }
}

Cart.propTypes = {
  itemsInCart: PropTypes.array,
  addItemToCart: PropTypes.func,
  total: PropTypes.object,
}

Cart.defaultProps = {
  itemsInCart: [],
  addItemToCart: () => {},
  total: {},
}


export default Cart;
