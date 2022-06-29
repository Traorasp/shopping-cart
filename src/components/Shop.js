import React, { useState }from 'react';
import Item from './Item';
import {minerals, monstParts, allItems} from './materials.js';
import Cart from './Cart';
import uniqid from "uniqid";

function Shop() {
  
  const [buying, setBuying] = useState({
    title: "All",
    items: allItems
  })
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (e) => {
    const newItemName = e.target.classList[0];
    const ind = cartItems.findIndex((item) => {
      return item.Name.split(" ")[0] === newItemName
    })
    const infoInd = allItems.findIndex((item) => {
      return item.Name.split(" ")[0] === newItemName
    })
    if(ind === -1) {
      setCartItems(cartItems.concat({
      Name: allItems[infoInd].Name,
      Img: allItems[infoInd].Img,
      Price: allItems[infoInd].Price,
      Amount: 1,
      id: uniqid()
      }))
    } else {
      const newlist = cartItems;
      newlist[ind].Amount = newlist[ind].Amount+1;
      setCartItems(newlist)
    }
  }
  
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
    <Cart itemsInCart={cartItems} addItemToCart={addItemToCart}/>
    <nav>
      <button onClick={display}>All</button>
      <button onClick={display}>Minerals</button>
      <button onClick={display}>Monster Parts</button>
    </nav>
    <h1>{buying.title}</h1>
    <Item items={buying.items} addItemToCart={addItemToCart}/>
    </ div>
  );
}

export default Shop;
