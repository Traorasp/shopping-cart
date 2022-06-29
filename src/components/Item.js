import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { items, addItemToCart } = props;

  return (
    <div id='item-list'>
      {items.map((item) => {
    return (
    <div key={item.id}>
      <img src={item.Img} />
      <h3>{item.Name}</h3>
      <p>${item.Price}</p>
      <p>{item.Desc}</p>
      <button onClick={addItemToCart} className={item.Name}>Add To Cart</button>
    </div>
    )
  })}
    </div>
  );
}

Item.propTypes = {
  items: PropTypes.array,
  addItemToCart: PropTypes.func,
}

Item.defaultProps = {
  items: [],
  addItemToCart: () => {},
}

export default Item;
