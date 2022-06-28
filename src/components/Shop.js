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


function Shop() {
  const minerals = [
    {
      Name: "Mythril",
      Img: Mythril,
      Desc: "A light ore with high magic conductivity",
      Price: 199,
    },
    {
      Name: "Venomite",
      Img: Venomite,
      Desc: "A poisonous ores that poisons  things it touches",
      Price: 99,
    },
    {
      Name: "Tonsteel",
      Img: Tonsteel,
      Desc: "An incredibly heavy materiaal with high toughness",
      Price: 169,
    },
    {
      Name: "Krate",
      Img: Krate,
      Desc: "A fiery mineral which emits heat constantly",
      Price: 99,
    },
    {
      Name: "Etherium",
      Img: Etherium,
      Desc: "A mineral infused with spirit energy",
      Price: 299,
    },
  ]

  const monstParts = [
    {
      Name: "Dragon Scale",
      Img: DragonScale,
      Desc: "Tougher than the toughest materials around",
      Price: 299,
    },
    {
      Name: "Slime",
      Img: Slime,
      Desc: "A gelatenous material that can easily change shape",
      Price: 39,
    },
    {
      Name: "Unicorn Horn",
      Img: Unicorn,
      Desc: "Has healing and magical properties when made into potions",
      Price: 199,
    },
    { 
      Name: "Bholder Eye",
      Img: BeholderEye,
      Desc: "An essential item for high level curses and black magic",
      Price: 399,
    },
    {
      Name: "Armadillo Shell",
      Img: Armadillo,
      Desc: "An armadillo shell what did you expect",
      Price: 999,
    },
  ]

  const allItems = monstParts.concat(minerals);
  
  const [buying, setBuying] = useState({
    title: "All",
    items: allItems
  })
  
  const display = (e) => {
    const newBuying = e.target.textContent;    
    let newItems = buying === "All" ? allItems : buying === "Minerals" ? minerals : monstParts;
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
    <Item items={buying.list}/>
    </ div>
  );
}

export default Shop;
