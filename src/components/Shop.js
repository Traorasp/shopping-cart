import React, { useState }from 'react';
import Item from './Item';
import Etherium from '../Images/Ores/Etherium.jpg';
import Krate from '../Images/Ores/Krate.jpg';
import Mythril from '../Images/Ores/Mythril.webp';
import Tonsteel from '../Images/Ores/Tonsteel.webp';
import Venomite from '../Images/Ores/Venomite.jpg';
import Armadillo from '../Images/Parts/Armadillo-shell.jpeg';
import BeholderEye from '../Images/Parts/Beholder-eye.webp';
import DragonScale from '../Images/Parts/Dragon-Scales.jpg';
import Slime from '../Images/Parts/Slime.jpg';
import Unicorn from '../Images/Parts/Unicorn-horn.jpg';
import uniqid from "uniqid";

function Shop() {
  const minerals = [
    {
      Name: "Mythril",
      Img: Mythril,
      Desc: "A light ore with high magic conductivity",
      Price: 199,
      id: uniqid()
    },
    {
      Name: "Venomite",
      Img: Venomite,
      Desc: "A poisonous ores that poisons  things it touches",
      Price: 99,
      id: uniqid()
    },
    {
      Name: "Tonsteel",
      Img: Tonsteel,
      Desc: "An incredibly heavy materiaal with high toughness",
      Price: 169,
      id: uniqid()
    },
    {
      Name: "Krate",
      Img: Krate,
      Desc: "A fiery mineral which emits heat constantly",
      Price: 99,
      id: uniqid()
    },
    {
      Name: "Etherium",
      Img: Etherium,
      Desc: "A mineral infused with spirit energy",
      Price: 299,
      id: uniqid()
    },
  ]

  const monstParts = [
    {
      Name: "Dragon Scale",
      Img: DragonScale,
      Desc: "Tougher than the toughest materials around",
      Price: 299,
      id: uniqid()
    },
    {
      Name: "Slime",
      Img: Slime,
      Desc: "A gelatenous material that can easily change shape",
      Price: 39,
      id: uniqid()
    },
    {
      Name: "Unicorn Horn",
      Img: Unicorn,
      Desc: "Has healing and magical properties when made into potions",
      Price: 199,
      id: uniqid()
    },
    { 
      Name: "Bholder Eye",
      Img: BeholderEye,
      Desc: "An essential item for high level curses and black magic",
      Price: 399,
      id: uniqid()
    },
    {
      Name: "Armadillo Shell",
      Img: Armadillo,
      Desc: "An armadillo shell what did you expect",
      Price: 999,
      id: uniqid()
    },
  ]

  const allItems = monstParts.concat(minerals);
  
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
