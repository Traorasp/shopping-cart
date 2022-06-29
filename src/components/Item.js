import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { items } = props;

  return (
    <div id='item-list'>
      {items.map((item) => {
    return (
    <div key={item.id}>
      <img src={item.Img} />
      <h3>{item.Name}</h3>
      <p>${item.Price}</p>
      <p>{item.Desc}</p>
    </div>
    )
  })}
    </div>
  );
}

Item.propTypes = {
  items: PropTypes.array,
}

Item.defaultProps = {
  items: []
}

export default Item;
