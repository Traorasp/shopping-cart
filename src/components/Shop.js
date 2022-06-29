import React, { useState }from 'react';
import Item from './Item';
import {minerals, monstParts, allItems} from './materials.js';
import Cart from './Cart';

function Shop() {
  
  const [buying, setBuying] = useState({
    title: "All",
    items: allItems
  })
  
  const display = (e) => {
    const newBuying = e.target.textContent;    
    let newItems = newBuying === "All" ? allItems : newBuying === "Minerals" ? minerals : monstParts;
    setBuying({
      title: newBuying,
      items: newItems
    });

  }

  return (
    <div>
    <Cart />
    <nav>
      <button onClick={display}>All</button>
      <button onClick={display}>Minerals</button>
      <button onClick={display}>Monster Parts</button>
    </nav>
    <h1>{buying.title}</h1>
    <Item items={buying.items}/>
    </ div>
  );
}

export default Shop;
